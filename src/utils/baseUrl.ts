export const getBaseUrl = (): string => {
  const env = process.env.ENV || 'qa'
  const baseUrls: { [key: string]: string } = {
    qa: 'https://opensource-demo.orangehrmlive.com',
    dev: 'https://opensource-demo.orangehrmlive.com',
  }

  return baseUrls[env] || baseUrls['qa']
}
