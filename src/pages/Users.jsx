import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { GithubContext } from "../context/github/GithubContext";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import RepoList from "../repos/RepoList";
import { getUserAndRepo } from "../context/github/GithubAction";

const Users = () => {
  const { user, dispatch, loading, repos } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({
      type: "SET_LOADING_TRUE",
    });

    const getUserData = async () => {
      const repoData = await getUserAndRepo(params.login);

      dispatch({
        type: "GET_USER_AND_REPO",
        payload: repoData,
      });
    };
    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return (
      <div
        className='pb-9 '
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-60px",
        }}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className='container mr-auto ml-auto'>
        <div className='w-full mx-auto lg:w-10/12'>
          <div className='mb-4'>
            <Link to='/' className='btn btn-ghost'>
              Back To Search
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{name}</h2>
                <p className='flex-grow-0'>{login}</p>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='px-4 grid grid-cols-1 gap-8 '>
              <div className='mb-6'>
                <h1 className='text-3xl card-title'>
                  {name}
                  <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                  {hireable && (
                    <div className='mx-1 badge badge-info'>Hireable</div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className='mt-4 card-actions'>
                  <a
                    href={html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-outline'>
                    Visit Github Profile
                  </a>
                </div>
              </div>

              <div className=' rounded-lg shadow-md bg-base-100 stats mr-3 '>
                {location && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Location</div>
                    <div className='text-lg stat-value'>{location}</div>
                  </div>
                )}
              </div>

              <div className=' rounded-lg shadow-md bg-base-100 stats '>
                {blog && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Blog</div>
                    <div className='text-lg stat-value'>
                      <a
                        href={`https://${blog}`}
                        target='_blank'
                        rel='noreferrer'>
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className=' rounded-lg shadow-md bg-base-100 stats '>
                {twitter_username && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Twitter</div>
                    <div className='text-lg stat-value'>
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target='_blank'
                        rel='noreferrer'>
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col py-6 mb-6  rounded-lg shadow-md bg-base100 stats md:flex-row'>
          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaUsers className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Followers</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {followers}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaUserFriends className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Following</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {following}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaCodepen className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Repos</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_repos}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaStore className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Gist</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_gists}
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default Users;
