import Image from "next/image";
import Link from "next/link";

interface UserProfileProps {
  avatarUrl: string;
  username: string;
  name: string;
  bio: string;
  location: string | null;
  publicRepos: number;
}

const UserProfile = ({avatarUrl, name, username, bio, location, publicRepos  }: UserProfileProps ) => {
  return (
    <div className='mx-8 rounded-xl bg-slate-300 p-6 lg:w-1/4 h-fit'>
            <div className="flex lg:flex-col items-center lg:border-b border-b-gray-600 pb-4">
              <div className="space-y-4">
                <Image
                  src={avatarUrl}
                  alt={`${username}'s avatar`}
                  width={100}
                  height={100}
                  className="size-24 w-fit mx-auto rounded-full"
                /> 

                <div className="text-left lg:text-center space-y-0.5">
                  <div>
                    <Link href={`https://github.com/${username}`} target="_blank" className="text-base lg:text-xl hover:text-gray-700">{name}</Link>
                    <p className="text-sm lg:text-base text-gray-600">@{username}</p>
                  </div>
                  <p className="text-sm lg:text-base">{bio}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/user.svg"
                  height={20}
                  width={20}
                  alt="usericon"
                  className=""
                />
                <p className="text-sm lg:text-base">{bio}</p>
              </div>

              {location &&
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/icons/location.svg"
                    height={20}
                    width={20}
                    alt="usericon"
                    className=""
                  />
                  <p className="text-sm lg:text-base">{location}</p>
                </div>
              }
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/book.svg"
                  height={20}
                  width={20}
                  alt="usericon"
                  className=""
                />
                <p className="text-sm lg:text-base">{publicRepos} Repositories</p>
              </div>
            </div>
    </div>
  )
}

export default UserProfile

