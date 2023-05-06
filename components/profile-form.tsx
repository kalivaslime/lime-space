'use client'
import {User} from '@prisma/client'

type ProfileFormProps = {
  user: User
}

export function ProfileForm({user}: ProfileFormProps) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    }

    const res = await fetch(`/api/user`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })

    await res.json()
  }

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form className='form' onSubmit={updateUser}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            className='input'
            type='text'
            name='name'
            defaultValue={user?.name ?? ''}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='bio'>Bio</label>
          <textarea
            className='input'
            name='bio'
            cols={35}
            rows={5}
            defaultValue={user?.bio ?? ''}
          ></textarea>
        </div>
        <div className='form-control'>
          <label htmlFor='age'>Age</label>
          <input type='text' name='age' defaultValue={user?.age ?? 0} />
        </div>
        <div className='form-control'>
          <label htmlFor='image'>Profile Image URL</label>
          <input type='text' name='image' defaultValue={user?.image ?? ''} />
        </div>

        <button className='form-button' type='submit'>
          Save
        </button>
      </form>
    </div>
  )
}
