import React from 'react';
import axios from 'axios';


import AdminLayout from '@/components/layouts/AdminLayout';

const Dashboard = ({ user }) => {


  if (!user) {
    return <p>Redirecting...</p>; // You can show a loading message here
  }



  return (
    <AdminLayout user={user}>
    <div className='bg-indigo-200 p-4'>
      <h1 className='dark:text-gray-900'>Welcome, {user.name}</h1>
      <p className='dark:text-gray-900'>Email: {user.email}</p>
    </div>
    </AdminLayout>
  );
};

// Check token validity on the server side
export async function getServerSideProps(context) {
  const token = context.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    // Make an API call to verify the token
    const response = await axios.post('http://127.0.0.1:8000/api/verify-token', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('User fetched:', response.data.user);

    if (response.data.valid) {
      return {
        props: {
          user: response.data.user, // Pass user info as props to the page
        },
      };
    } else {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}

export default Dashboard;
