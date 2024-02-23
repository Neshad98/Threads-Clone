import { Avatar, Box, Button, Divider, Flex, Image, Spinner, Text } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "../components/Actions"
import { useEffect, useState } from "react"
import Comment from "../components/Comment"
import useGetUserProfile from "../hooks/useGetUserProfile"
import useShowToast from "../hooks/useShowToast"
import { useParams } from "react-router-dom"


const PostPage = () => {
  const { user, loading } = useGetUserProfile();
  const [post, setPosts] = useState(null);
  const showToast = useShowToast();
  const { pid } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {

      } catch (error) {
        showToast("Error", error.message, "error")
      }
    }
    getPost();
  }, [])

  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    )
  }

  return <>
    <Flex>
      <Flex w={"full"} alignItems={"center"} gap={3}>
        <Avatar src={user.profilePic} size={"md"} name="username" />
        <Flex>
          <Text fontSize={"small"} fontWeight={"bold"}>{user.username}</Text>
          <Image src="/verified.png" w={4} h={4} ml={4} />
        </Flex>
      </Flex>
      <Flex gap={4} alignItems={"center"}>
        <Text fontSize={"small"} color={"gray.light"}>1d</Text>
        <BsThreeDots />
      </Flex>
    </Flex>

    <Text my={3}>Let&apos;s talk about Threads.</Text>
    <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
      <Image src={"/post1.png"} w={"full"} />
    </Box>

    <Flex gap={3} my={3}>
      <Actions post={post} />
    </Flex>

    <Flex gap={2} alignItems={"center"}>
      <Text color={"gray.light"} fontSize={"small"}>238 replies</Text>
      <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
      <Text color={"gray.light"} fontSize={"small"}>
        {200} likes
      </Text>
    </Flex>
    <Divider my={4} />

    <Flex justifyContent={"space-between"}>
      <Flex gap={2} alignItems={"center"}>
        <Text fontSize={"2xl"}>👋</Text>
        <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
      </Flex>
      <Button>
        Get
      </Button>
    </Flex>

    <Divider my={4} />
    {/* <Comment
      comment="Looks really good!" createdAt="2d" likes={100} username="John doe"
      userAvatar="https://bit.ly/dan-abramov" /> */}


  </>

}

export default PostPage