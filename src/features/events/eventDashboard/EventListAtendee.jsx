import { Image, List } from "semantic-ui-react";

export default function EventListAttende({attendee}) {
    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    )
}