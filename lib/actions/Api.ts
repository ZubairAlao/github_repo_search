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
        return { error: `User '${username}' not found - use your username not your name` };
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
      return { error: error instanceof Error ? error.message : 'An unexpected error occurred.' };
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
      throw new Error (`User repo not found`);
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    // return { error: error instanceof Error ? error.message : 'An unexpected error occurred.' };
    return null
  }
};