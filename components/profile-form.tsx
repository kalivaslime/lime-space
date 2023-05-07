'use client'
import {User} from '@prisma/client'
import {useRouter} from 'next/navigation'
import {Input} from './ui/input'
import {Label} from './ui/label'
import {Textarea} from './ui/textarea'
import {Button} from './ui/button'

type ProfileFormProps = {
  user: User
}

export function ProfileForm({user}: ProfileFormProps) {
  const router = useRouter()
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
    alert('Profile updated!')
  }

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form className='max-w-md flex flex-col gap-3' onSubmit={updateUser}>
        <div className='form-control'>
          <Label htmlFor='name'>Name</Label>
          <Input type='text' name='name' defaultValue={user?.name ?? ''} />
        </div>
        <div className='form-control'>
          <Label htmlFor='bio'>Bio</Label>
          <Textarea
            name='bio'
            cols={35}
            rows={5}
            defaultValue={user?.bio ?? ''}
          ></Textarea>
        </div>
        <div className='form-control'>
          <Label htmlFor='age'>Age</Label>
          <Input type='text' name='age' defaultValue={user?.age ?? 0} />
        </div>
        <div className='form-control'>
          <Label htmlFor='image'>Profile Image URL</Label>
          <Input type='text' name='image' defaultValue={user?.image ?? ''} />
        </div>

        <Button className='mt-4' type='submit'>
          Save
        </Button>
      </form>
    </div>
  )
}
