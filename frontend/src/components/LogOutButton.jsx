import { Button } from "@chakra-ui/react"


const LogOutButton = () => {
  const handleLogout = async () => {
    try {
      localStorage.removeItem('user-threads');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Button
      position={"fixed"} top={"30px"} right={"30px"} size={"sm"} onClick={handleLogout}
    >Logout
    </Button>

  )
}

export default LogOutButton