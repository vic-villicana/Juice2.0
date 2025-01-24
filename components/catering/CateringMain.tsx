import {Message, MessageContainer, MessageH1, Mimage, Line, MimageContainer, Mparagraph, Signature } from "../home/HomePageElements"
import table from '../../public/mexicantable.jpg'


const CateringMain = () => {
    return(
        <>
            <MessageContainer>
                <Message >
                    <MessageH1>
                    A Journey That Never Ends
                    </MessageH1>
                    <Line />
                    <Mparagraph >
                        Since 2011 Juicy Juize Tacos has been on a mission 
                        to not only provide Los Angeles with the best 
                        authentic Mexican food but also the hospitality you 
                        can expect at the dinner table. From our family 
                        recipes to our excellent catering staff, we make 
                        everynight a special night
                    </Mparagraph>
                    <Mparagraph >
                        Sincerly,
                    </Mparagraph>
                    <Signature >
                        The Juicy Juice Team
                    </Signature>
                </Message>
                <MimageContainer>
                    <Mimage src={table} height="300" width="375" alt="dinner table" layout="responsive"/>
                </MimageContainer>
            </MessageContainer>
        </>
    )
}

export default CateringMain