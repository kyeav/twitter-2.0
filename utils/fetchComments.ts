import { Comment } from "../typings"

export const fetchComments = async (tweetId: string) => {
    // endpoint -> getComments
    // url query param -> tweetId 
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`)
    const comments: Comment[] = await res.json()
    return comments
}