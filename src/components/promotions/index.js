import { Message } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Slide } from "@mui/material";



const messages = [
    "10% off on your first order!",
    "Summer sale has already started, order us now.",
    "Do spread the word about us :)",
];

export default function Promotions() {
    const containerRef=useRef();
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 3000);

        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)
            setShow(true);

            setTimeout(() => {
                setShow(false)
            }, 3000);

        }, 4000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <PromotionsContainer ref={containerRef}>
            <Slide
            container={containerRef.current}
            direction={show ? "left" : "right"} in={show}
                timeout={{
                    enter: 1000,
                    exit: 300
                }}>
                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    )
}