import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner, FaTrash } from 'react-icons/fa';

import { Form, SubmitButton, List, Warning } from './styles';
import Container from '../../components/Container';
import api from '../../services/api';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: false,
    errorMessage: '',
  };

  // Get data from localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Save data to localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    try {
      const repoExists = repositories.some((repo) => repo.name === newRepo);

      if (repoExists) {
        throw new Error('This repository is already in the list');
      }

      const response = await api.get(`/repos/${newRepo}`, {
        crossdomain: true,
      });

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        error: false,
        errorMessage: '',
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
        loading: false,
      });
    }
  };

  handleDeleteRepository = (repoName) => {
    const { repositories } = this.state;

    this.setState({
      repositories: [...repositories.filter((repo) => repo.name !== repoName)],
    });

    localStorage.removeItem('repositories');

    localStorage.setItem('repositories', JSON.stringify(repositories));
  };

  render() {
    const { newRepo, loading, repositories, error, errorMessage } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit} error={error ? 1 : 0}>
          <input
            type="text"
            placeholder="Add repository"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="fff" size={14} />
            ) : (
                <FaPlus color="#fff" size={14} />
              )}
          </SubmitButton>
        </Form>

        <Warning active={error}>{errorMessage}</Warning>

        <List>
          {repositories.map((repo) => (
            <li key={repo.name}>
              <div>
                <small>
                  <FaTrash
                    onClick={() => {
                      this.handleDeleteRepository(repo.name);
                    }}
                  />
                </small>
                <span>{repo.name}</span>
              </div>
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
