import { Card, Card2, CardBtn, CardContainer, CardHeading, CardSection, CardText, Gradient, HeaderBtns, HomeH1, HomeHeader, Line, Line2, MainHeader, Message, MessageContainer, MessageH1, Mimage, Mparagraph, Signature, StandardButton } from "./HomePageElements"
import platos from '../../public/platos.jpg'
import table from '../../public/mexicantable.jpg'

const HomePage = () => {
    return(
        <div>

            <MainHeader >
                <HomeHeader>
                    <HomeH1>
                        Juicy Juice Tacos
                    </HomeH1>
                    <HeaderBtns>
                        <StandardButton>
                            Order Now
                        </StandardButton>
                        <StandardButton>
                            Book Event
                        </StandardButton>
                    </HeaderBtns>
                </HomeHeader>
            </MainHeader>

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
                        sincerly,
                    </Mparagraph>
                    <Signature >
                        The Juicy Juice Team
                    </Signature>
                </Message>
                <Mimage src={table} height="325" alt="dinner table"/>
            </MessageContainer>

            <CardSection>
                <CardHeading>
                    A Unique And Authentic
                    Blend Of Flavors
                    <Line2 />
                </CardHeading>
                <CardContainer>
                    <Card>
                    <Gradient/>
                        <CardText>
                            All Your Favorites, Made Fresh
                        </CardText>
                        <CardBtn >
                            Order Now
                        </CardBtn>
                        <Card2 src="/platos.jpg" height="300" width="300" alt="plate" />
                    </Card>
                    <Card>
                        <Gradient/>
                        <CardText>
                            Family, Food, Tradition
                        </CardText>
                        <CardBtn >
                            Catering 
                        </CardBtn>
                        <Card2 src="/mexicantable.jpg" height="300" width="300" alt="plate" />
                    </Card>
                    <Card >
                        <Gradient/>
                        <CardText>
                            Ask Us Anything
                        </CardText>
                        <CardBtn >
                            Contact Us
                        </CardBtn>
                        <Card2 src="/platos.jpg" height="300" width="300" alt="plate" />
                    </Card>
                </CardContainer>
            </CardSection>

        </div>
    )
}

export default HomePage