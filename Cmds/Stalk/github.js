module.exports = async (context) => {

const { client, m, text } = context;

if (!text) return m.reply('Provide a github username to stalk');

const response = await fetch(`https://itzpire.com/stalk/github-user?username=${text}`)

const data = await response.json()
 
    const username = data.data.username;
    const nickname = data.data.nickname;
    const bio = data.data.bio;
    const profilePic = data.data.profile_pic;
    const url = data.data.url;
    const type = data.data.type;
    const isAdmin = data.data.admin;
    const company = data.data.company;
    const blog = data.data.blog;
    const location = data.data.location;
    const publicRepos = data.data.public_repo;
    const publicGists = data.data.public_gists;
    const followers = data.data.followers;
    const following = data.data.following;
    const createdAt = data.data.ceated_at;
    const updatedAt = data.data.updated_at;

    
const message = `Username:- ${username}\nNickname:- ${nickname}\nBio:- ${bio}\nLink:- ${url}\nLocation:- ${location}\nFollowers:- ${followers}\nFollowing:- ${following}\nRepos:- ${public_repos}\nCreated:- ${createdAt}`

await client.sendMessage(m.chat, { image: { url: profilePic}, caption: message}, {quoted: m})

} 