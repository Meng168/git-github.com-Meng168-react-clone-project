import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import { toast } from "react-toastify";
import {
    FacebookIcon,
    FacebookShareButton,
} from "react-share";

const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    marginBottom: '50px'
};

const BlogItems = ({
        title,
        poster,
        year
    }) => {
    const handleClick = () => {
        toast.warn('🦄 You cannot use a router! ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <Col Col xxl = {
            4
        }
        xl = {
            4
        }
        lg = {
            4
        }
        md = {
            4
        }
        sm = {
            6
        }
        xs = {
            12
        } >
            <Card style={cardStyle}>
                <Slide bottom>
                    <CardMedia
                        component="img"
                        height="340"
                        image={poster}
                        alt="green iguana"
                        className="cart-media"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {year}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <FacebookShareButton 
                            url={poster}
                            quote={title}
                            hashtag='#React'>
                            <Button size="small">
                                Share
                            </Button>
                        </FacebookShareButton>
                        <Button size="small" onClick={handleClick}>Learn More</Button>
                    </CardActions>
                </Slide>
            </Card>
        </Col>
    )
}

export default BlogItems
