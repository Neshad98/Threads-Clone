import { useEffect, useState } from "react"
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";


const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`)
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
        console.log(data);
      } catch (error) {
        showToast("Error", error, "error");
      }
    }
    getUser();
  }, [username, showToast])

  if (!user) return null;

  return <>
    <UserHeader user={user} />
    <UserPost likes={1200} replies={269} postImg="/post1.png" postTitle="Let's talk about threads." />
    <UserPost likes={1900} replies={520} postImg="/post2.png" postTitle="Niceee tutorial" />
    <UserPost likes={700} replies={370} postImg="/post3.png" postTitle="I love this guy" />
    <UserPost likes={700} replies={370} postTitle="Posting for the first time on threads" />
  </>

}

export default UserPage