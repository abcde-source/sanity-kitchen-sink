export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60992141d5eadbbc22bdefb9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j4tyjqdb',
                  apiId: 'a9e99ced-f25e-4b3c-8fd5-60ac6b5cb4de'
                },
                {
                  buildHookId: '60992141717d8c54f4c8bdb8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5h2bag1a',
                  apiId: '6cb7a140-5ca0-43d8-a5b2-f68d105c9509'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abcde-source/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5h2bag1a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
