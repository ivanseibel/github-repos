import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import {
  IssuesHeader,
  Loading,
  Owner,
  IssueList,
  Filters,
  FilterButton,
  Pages,
  IssuesFooter,
  NavButton,
} from './styles';
import Container from '../../components/Container';

class Main extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    loadingText: 'Loading...',
    filter: 'open',
    page: 1,
  };

  async componentDidMount() {
    this.getIssues();
  }

  getIssues = async () => {
    try {
      const { match } = this.props;
      const repoName = decodeURIComponent(match.params.repository);
      const { filter, page } = this.state;

      const [repo, issues] = await Promise.all([
        api.get(`/repos/${repoName}`, { crossdomain: true }),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: filter,
            per_page: 5,
            page,
          },
          crossdomain: true,
        }),
      ]);

      this.setState({
        loading: false,
        issues: issues.data,
        repository: repo.data,
      });
    } catch (error) {
      this.setState({
        loadingText:
          'Was not possible to get repository details.\nTry again later.',
      });
    }
  };

  handleFilterButtonClick = (e) => {
    const newFilter = e.target.innerText;

    this.setState({
      filter: newFilter,
    });

    this.getIssues();
  };

  handlePageButtonClick = async (e) => {
    const { page } = this.state;
    const sumPage = e.target.innerText === 'next' ? 1 : -1;

    await this.setState({ page: page + sumPage });

    this.getIssues();
  };

  render() {
    const {
      loading,
      issues,
      repository,
      filter,
      loadingText,
      page,
    } = this.state;

    if (loading) {
      return (
        <Loading>
          <p>{loadingText}</p>
        </Loading>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Go back to main page</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <IssuesHeader>
            <Filters>
              <FilterButton
                active={filter === 'open'}
                onClick={this.handleFilterButtonClick}
              >
                open
              </FilterButton>
              <FilterButton
                active={filter === 'closed'}
                onClick={this.handleFilterButtonClick}
              >
                closed
              </FilterButton>
              <FilterButton
                active={filter === 'all'}
                onClick={this.handleFilterButtonClick}
              >
                all
              </FilterButton>
            </Filters>

            <Pages>
              <NavButton
                active={!(page === 1)}
                onClick={this.handlePageButtonClick}
              >
                prev
              </NavButton>
              <NavButton active onClick={this.handlePageButtonClick}>
                next
              </NavButton>
            </Pages>
          </IssuesHeader>

          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <IssuesFooter>
          <strong>Page: {page}</strong>
        </IssuesFooter>
      </Container>
    );
  }
}

export default Main;
