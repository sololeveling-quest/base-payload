import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  endpoints: [
    {
      path: '/register',
      method: 'post',
      handler: async (req) => {
        const data = req.json ? await req.json() : {}
        const { email, password, name } = data
        const { create } = req.payload
        const result = await create({
          collection: 'users',
          data: {
            email,
            password,
            name,
          },
        })
        return Response.json({
          id: result.id,
          name: result.name,
          role: result.role,
          email: result.email,
        })
      },
    },
  ],
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Member', value: 'member' },
      ],
      defaultValue: 'member',
    },
  ],
}
