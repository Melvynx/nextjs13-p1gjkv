'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export const UserForm = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedUser = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    };

    fetch(`/api/users/new`, {
      method: 'POST',
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((json) => {
        router.refresh();
        router.push('/');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold mb-4">Create user</h1>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <input
        type="submit"
        value="Create"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      />
    </form>
  );
};
