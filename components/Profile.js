import CustomContainer from "./CustomContainer"
import { Text } from "@chakra-ui/react"

export default function Profile({ user }) {
    return (
        <CustomContainer>
            <Text>Username: {user.getUsername} </Text>
        </CustomContainer>
    )
}
