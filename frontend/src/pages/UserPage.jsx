import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"


const UserPage = () => {
  return <>
    <UserHeader />
    <UserPost likes={1200} replies={269} postImg="/post1.png" postTitle="Let's talk about threads." />
    <UserPost likes={1900} replies={520} postImg="/post2.png" postTitle="Niceee tutorial" />
    <UserPost likes={700} replies={370} postImg="/post3.png" postTitle="I love this guy" />
    <UserPost likes={700} replies={370} postTitle="Posting for the first time on threads" />
  </>

}

export default UserPage