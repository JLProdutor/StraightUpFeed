import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from './Avatar.tsx';
import { useState } from "react";
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state => {
            return state + 1
        }));
    }

    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/102752985?v=4" 
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.commentAuthorAndTime}>
                            <strong>JL</strong>
                            <time 
                                title="05 de Dezembro às 17:00" 
                                dateTime="2024-12-05 17:00:00">
                            </time>
                        </div>

                        <button 
                            onClick={handleDeleteComment} 
                            title="Delete Comment">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Like <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    );
};
