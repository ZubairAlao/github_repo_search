'use server'

const token = process.env.GITHUB_TOKEN;
export const fetchGitHubUsername = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
            'Authorization': `token ${token}`,
        },
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found.');
      } else if (response.status === 401) {
        throw new Error('Invalid or missing GitHub token.');
      } else {
        throw new Error(`API error: ${response.statusText}`);
      }
    }
    const data = await response.json();
    return data
  } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      throw error;
  }
};

export const fetchGitHubRepos = async (username: string) => {
  try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`, {
          method: 'GET',
          headers: {
              'Authorization': `token ${token}`,
          },
      });
    if (!response.ok) {
      throw new Error(`User not found: ${response.status}`);
    }
    const data = await response.json();
    return data
  } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      return null;
  }
};