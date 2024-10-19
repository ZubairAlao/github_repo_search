import React from 'react'
import UserProfile from '@/components/UserProfile'
import { fetchGitHubRepos, fetchGitHubUsername } from '@/lib/actions/Api';
import { columns } from '@/components/repoTable/columns';
import { DataTable } from '@/components/repoTable/DataTable';
import Image from 'next/image';
import Link from 'next/link';
import Search from '@/components/Search';

export interface RepoProps {
  name: string;
  html_url: string; 
  description: string | null; 
  stargazers_count: number; 
  forks_count: number; 
}

const User = async ({params: { username }}: SearchParamProps  ) => {
    const user = await fetchGitHubUsername(username);
    const repos = await fetchGitHubRepos(username);

    return (
      <div className="">
        {user && (repos !== null) ? 
          <div className='w-full'>
            <div className="">
              <Link href="/" >
                <Image
                  src="/assets/icons/arrow.svg"
                  height={50}
                  width={50}
                  alt="arrow-icon"
                  className="w-[30px] h-fit mx-8 my-4"
                />
              </Link>
            </div>
  
            <div className='lg:flex gap-4'>
              <UserProfile 
                username={user.login}
                name={user.name}
                avatarUrl={user.avatar_url}
                location={user.location || "No location available"}
                bio={user.bio || "No bio available"}
                publicRepos={user.public_repos}
              />
  
              <div className='w-full lg:w-3/4 mt-8 lg:mt-0 px-8'>
                <DataTable columns={columns} data={repos} />
              </div>
            </div>
          </div>
        :
        <div className='w-full text-center flex justify-center items-center flex-col min-h-screen px-8'>
          <h1 className="text-xl font-bold mb-6">Something went wrong, check your username</h1>
          <Search />
        </div> }
      </div>
      );
}

export default User;
