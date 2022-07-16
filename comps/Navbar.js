import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Card, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TimelineIcon from '@mui/icons-material/Timeline';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { useEffect, useState } from "react";





const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
}



export default function Navbar() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" sx={{ background: 'none', color: '#111' }} >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Button color="inherit">ZYRO</Button>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <MenuIcon />
                </Toolbar>
            </AppBar>
            <Box position="relative" sx={{ background: '#fb506e' }} component='main'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Box component="video"
                            sx={{
                                height: 500,
                                width: 500,

                            }}
                            autoPlay
                            alt="zyro vid"
                            src="https://zyro.com/_nuxt/videos/hero.e87c7d8.mp4"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h2' color='#fff'>
                            Flawless templates, easy editing, no coding required — that's Zyro website builder
                        </Typography>
                        <Typography variant='paragraph' color='#fff'>
                            Build a website and save up to 75% with plans from $2.99/mo. Deal ends in:
                        </Typography><br /><br />
                        <Box>
                            <Typography variant='paragraph' color='#fff'>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Box >
                                        <Typography variant='h5'>
                                            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Typography>
                        </Box><br /><br />
                        <Box>
                            <Button variant="contained" sx={{ background: '#583bb6', borderRadius: '40px', color: '#fff' }} >Start for Free</Button>
                            <Typography color='#fff'>No credit card required</Typography>
                        </Box>
                    </Grid>


                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Button variant='contained' sx={{ background: '#fff', color: '#111' }}>Free domain for 1 year </Button>
                    </Grid>
                    <Grid item xs>
                        <Button variant='contained' sx={{ background: '#fff', color: '#111' }}>24/7 customer support</Button>

                    </Grid>
                    <Grid item xs>
                        <Button variant='contained' sx={{ background: '#fff', color: '#111' }}>30-day money-back guarantee </Button>

                    </Grid>
                </Grid>
                <Toolbar />
            </Box>
            <Toolbar />

            <Typography align='center' variant='h2'>Choose your website builder plan </Typography>
            <Box textAlign='left' paddingLeft={30} paddingRight={30} >
                <Card variant='outlined' sx={{ borderRadius: '15px' }}>
                    <CardContent variant="outlined" >
                        <Typography variant="body2" color="text.secondary">
                            30-day money-back guarantee with every Zyro plan
                        </Typography>
                    </CardContent>


                </Card>
                <Toolbar></Toolbar>
                <Box>
                    <Card variant='outlined' sx={{ borderRadius: '15px' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <b>Website</b>
                            </Typography>

                            <Typography variant="body" color="text.secondary">
                                Create a professional portfolio, blog, or personal website.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Typography><strike>$11.99 </strike><Button sx={{ background: '#fb506e', color: '#fff' }}><b>75% off</b></Button></Typography>
                                <Typography>From:</Typography>
                                <Typography><h1><b>$2.99</b> /mo</h1></Typography>

                                <Typography>VAT may apply.</Typography>
                                <Button variant="contained" sx={{ background: '#583bb6', color: '#fff' }}  >
                                    Select
                                </Button>
                            </Typography>

                        </CardContent>
                        <Divider variant='middle' />
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>See all features</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Card>
                    <Card variant='outlined' sx={{ borderRadius: '15px' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <b>Website</b>
                            </Typography>

                            <Typography variant="body" color="text.secondary">
                                Create a professional portfolio, blog, or personal website.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Typography><strike>$11.99 </strike><Button sx={{ background: '#fb506e', color: '#fff' }}><b>75% off</b></Button></Typography>
                                <Typography>From:</Typography>
                                <Typography><h1><b>$2.99</b> /mo</h1></Typography>

                                <Typography>VAT may apply.</Typography>
                                <Button variant="contained" sx={{ background: '#583bb6', color: '#fff' }}  >
                                    Select
                                </Button>
                            </Typography>

                        </CardContent>
                        <Divider variant='middle' />
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>See all features</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Card>
                    <Card variant='outlined' sx={{ borderRadius: '15px' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <b>Website</b>
                            </Typography>

                            <Typography variant="body" color="text.secondary">
                                Create a professional portfolio, blog, or personal website.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Typography><strike>$11.99 </strike><Button sx={{ background: '#fb506e', color: '#fff' }}><b>75% off</b></Button></Typography>
                                <Typography>From:</Typography>
                                <Typography><h1><b>$2.99</b> /mo</h1></Typography>

                                <Typography>VAT may apply.</Typography>
                                <Button variant="contained" sx={{ background: '#583bb6', color: '#fff' }}  >
                                    Select
                                </Button>
                            </Typography>

                        </CardContent>
                        <Divider variant='middle' />

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>See all features</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>



                    </Card>
                </Box>
            </Box>
            <Toolbar />
            <Box textAlign='center' paddingLeft={10} paddingRight={10} >
                <Card sx={{ background: '#f0f0eb' }}>
                    <Typography paddingLeft={10} variant='h4'>Which plan is best for you?</Typography>

                    <Typography paddingLeft={10} variant='body2'>
                        Still not sure which plan to pick? Don't worry, the Zyro pricing wizard will guide you to your perfect plan.
                    </Typography>

                </Card>

            </Box>
            <Toolbar />
            <Box textAlign='center'>
                <Card sx={{ background: '#f0f0eb' }}>
                    <Typography variant='h2' >

                        Zyro success stories

                    </Typography>

                    <Typography variant='body2'>
                        Join over 250,000 small business owners. Find out what you can do with a Zyro website
                    </Typography>
                    <Box textAlign='center' sx={{ typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList textAlign='center' onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Clients" value="1" />
                                    <Tab label="Tech Experts" value="2" />
                                    <Tab label="Trustpilot" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"><Grid container spacing={2}>
                                <Grid item xs>
                                    <Box height={200} variant='contained' alignItems={'center'} sx={{ background: '#fff', color: '#111' }}><Typography variant='body1'>"A portfolio is all about making an impression. I wanted a solution with great templates so that people can find my work easily and quickly." </Typography></Box>
                                </Grid>
                                <Grid item xs>
                                    <Box height={200} variant='contained' sx={{ background: '#fff', color: '#111' }}><Typography>"Zyro really empowers new businesses because you don’t need a lot of time, money, or experience to make it work. You can invest that straight back into your business." </Typography></Box>

                                </Grid>
                                <Grid item xs>
                                    <Box height={200} variant='contained' sx={{ background: '#fff', color: '#111' }}><Typography>"I needed a simple website, very fast, to get found online and start my business. Now, I’m ready to take the next step with Zyro and create</Typography></Box>

                                </Grid>
                            </Grid></TabPanel>
                            <TabPanel value="2"><Grid container spacing={3}>
                                <Grid item xs>
                                    <Box height={200} variant='contained' sx={{ background: '#fff', color: '#111' }}> </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>uku</Box>

                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>jkjuku</Box>

                                </Grid>
                            </Grid></TabPanel>
                            <TabPanel value="3"><Grid container spacing={3}>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}> jkjkjk</Box>
                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>jkjk</Box>

                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>jkj </Box>

                                </Grid>
                            </Grid></TabPanel>
                        </TabContext>
                    </Box>
                </Card>
            </Box>
            <Toolbar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant='h2' >Build fast. Grow faster. Load fastest.</Typography>
                            <Typography variant='body1' >Get a professional website that loads at lightning speed. Convert more of your website traffic into paying customers and rank higher on search engines. </Typography>
                            <Button sx={{ background: '#fb506e', color: '#fff', borderRadius: '25px' }}>Start for free</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            component="img"
                            paddingLeft={10}

                            sx={{
                                height: 250,
                                width: 500,
                                background: '#f0f0eb',
                            }}

                            alt="zyro vid"
                            src="https://zyro.com/cdn-cgi/image/w=1100,q=85,f=auto/images/homePage/headphones-mobile.png"
                        ></Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box component="img"
                            paddingLeft={10}

                            sx={{
                                height: 250,
                                width: 500,
                                background: '#f0f0eb',
                            }}

                            alt="zyro vid"
                            src="https://zyro.com/cdn-cgi/image/w=1100,q=85,f=auto/images/homePage/pop-up-mobile.png"
                        ></Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant='h2' >Customer support. Ready 24/7. </Typography><br /><br />
                            <Typography variant='body1' >Stuck? Not for long. Our live support team can help, no matter the time of day (or night).</Typography><br /><br />
                            <Button sx={{ background: '#fb506e', color: '#fff', borderRadius: '25px' }}>Start for free</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box paddingLeft={10}>

                <Typography variant='h5'> Sell online with no hidden fees</Typography>
                <br />
                <Typography variant='body2'>
                    Zyro's powerful eCommerce builder has everything you need to start, manage and grow your business online without taking a cut of your profits.
                </Typography>
                <br />
                <Typography variant='h6'> <AccessTimeIcon sx={{ color: '#fb506e' }} />SET UP IN MINUTES</Typography>
                <br />
                <Typography variant='body2'>Use our all-in-one eCommerce platform to build your shop and start selling online today.</Typography>
                <br />
                <Typography variant='h6'><LanguageIcon sx={{ color: '#fb506e' }} />SELL EVERYWHERE</Typography>
                <br />
                <Typography variant='body2'>Make your products available on your online store, Facebook and Instagram</Typography>
                <br />
                <Typography variant='h6'><AccessTimeIcon sx={{ color: '#fb506e' }} />MANAGEMENT MADE EASY</Typography>
                <br />
                <Typography variant='body2'>Whether it's inventory, shipping, or even taxes, our automatic tools will do the hard work for you.</Typography>
                <br />
                <Typography variant='h6'><TimelineIcon sx={{ color: '#fb506e' }} />GROW YOUR BUSINESS</Typography>
                <br />
                <Typography variant='body2'>Unleash the power of our AI tools and third party marketing tools to scale your online business.</Typography>
                <br />
                <Typography variant='h6'><VideoLabelIcon sx={{ color: '#fb506e' }} />MULTIPLE PAYMENT OPTIONS</Typography>
                <br />
                <Typography variant='body2'>Zyro Business, Online Store and Advanced Store plans support all of the most popular payment methods. From PayPal and Visa to Mastercard and more, accept online payments from all over the globe. See payment gateways .</Typography>
                <br />
                <Button sx={{ background: '#fb506e', color: '#fff', borderRadius: '25px' }}>Start for free</Button>

            </Box>
            <br />
            <br />
            <br />
            <Box paddingLeft={20}>

                <Box component="img"
                    sx={{
                        height: 900,
                        width: '100%',

                    }}
                    alt=""
                    src="https://zyro.com/cdn-cgi/image/w=1100,q=85,f=auto/images/homePage/shopping-cart.png"
                />
            </Box>
            <br />

            <Box textAlign='center' paddingLeft={5}>
                <Card>
                    <Typography variant='h3' >Fully customizable website templates </Typography>
                    <br />
                    <Typography variant='body2'>
                        Designer-made templates built to meet your needs. Choose a template and edit anything – change colors, fonts, images, and more. No coding skills needed.
                    </Typography>
                    <Box textAlign='center' sx={{ typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList textAlign='center' onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Popular Items" value="1" />
                                    <Tab label="Portfolio" value="2" />
                                    <Tab label="eCommerce" value="3" />
                                    <Tab label="Blog" value="4" />
                                    <Tab label="Business" value="5" />
                                    <Tab label="Resume" value="6" />
                                    <Tab label="Events" value="7" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"><Grid container spacing={3}>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>xxxxxxxxxxxxxx </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>kkkkkkkkkkkkkk</Box>

                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>kkkkkkkkkkkkkk</Box>

                                </Grid>
                            </Grid></TabPanel>
                            <TabPanel value="2"><Grid container spacing={3}>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}> </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>uku</Box>

                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>jkjuku</Box>

                                </Grid>
                            </Grid></TabPanel>
                            <TabPanel value="3"><Grid container spacing={3}>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}> jkjkjk</Box>
                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>jkjk</Box>

                                </Grid>
                                <Grid item xs>
                                    <Box variant='contained' sx={{ background: '#fff', color: '#111' }}>jkj </Box>

                                </Grid>
                            </Grid></TabPanel>
                        </TabContext>
                    </Box>
                </Card>
            </Box>
            <Box>
                <Typography textAlign={'center'} variant='h2'>Create a website you're proud of in 5 steps </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={6}>
                        <Box
                            component="img"
                            paddingLeft={10}

                            sx={{
                                height: 250,
                                width: 500,
                                background: '#f0f0eb',
                            }}

                            alt="zyro vid"
                            src="https://zyro.com/cdn-cgi/image/w=1100,q=85,f=auto/images/homePage/step-1.png"
                        ></Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Pick a template</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Customize Anything</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>Use AI Tools</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>

                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>Connect A Domain</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>

                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>Publish</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>

                            </Accordion>



                        </Box>
                    </Grid>

                </Grid>
                <Typography>Want to learn more? Learn how to create a website.</Typography>
                <br />
                <br />
                <Box paddingLeft={20} paddingRight={20}>
                    <Typography textAlign={'center'} variant='h4' >Website builder questions? We’ve got answers.</Typography>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant='h6'><b>What is a website builder</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To create a website, you’d normally need a lot of graphic design, programming, and marketing knowledge. Or, you’d need to hire experts of those industries, e.g. a web developer, to get everything done for you – that can get expensive.You can also use a content management system (CMS) to build your website yourself, but you’ll need a fair amount of tech knowledge to navigate the system.Luckily, you can also use a website builder to save money and time, and build your kind of website, all by yourself.Zyro is a site builder that allows you to create a beautiful website or a powerful eCommerce website in under an hour. You don’t need any prior knowledge in setting up websites or managing them either.Most of the website creation elements, from layout to design style, are taken care of for you when you use a site builder.</Typography>
                        </AccordionDetails>

                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant='h6'><b>Do I need any coding knowledge to create my site</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To create a website, you’d normally need a lot of graphic design, programming, and marketing knowledge. Or, you’d need to hire experts of those industries, e.g. a web developer, to get everything done for you – that can get expensive.You can also use a content management system (CMS) to build your website yourself, but you’ll need a fair amount of tech knowledge to navigate the system.Luckily, you can also use a website builder to save money and time, and build your kind of website, all by yourself.Zyro is a site builder that allows you to create a beautiful website or a powerful eCommerce website in under an hour. You don’t need any prior knowledge in setting up websites or managing them either.Most of the website creation elements, from layout to design style, are taken care of for you when you use a site builder.</Typography>
                        </AccordionDetails>

                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant='h6'><b>Can I use a custom domain</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To create a website, you’d normally need a lot of graphic design, programming, and marketing knowledge. Or, you’d need to hire experts of those industries, e.g. a web developer, to get everything done for you – that can get expensive.You can also use a content management system (CMS) to build your website yourself, but you’ll need a fair amount of tech knowledge to navigate the system.Luckily, you can also use a website builder to save money and time, and build your kind of website, all by yourself.Zyro is a site builder that allows you to create a beautiful website or a powerful eCommerce website in under an hour. You don’t need any prior knowledge in setting up websites or managing them either.Most of the website creation elements, from layout to design style, are taken care of for you when you use a site builder.</Typography>
                        </AccordionDetails>

                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant='h6'><b>Is it easy to create a site with Zyro Builder</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To create a website, you’d normally need a lot of graphic design, programming, and marketing knowledge. Or, you’d need to hire experts of those industries, e.g. a web developer, to get everything done for you – that can get expensive.You can also use a content management system (CMS) to build your website yourself, but you’ll need a fair amount of tech knowledge to navigate the system.Luckily, you can also use a website builder to save money and time, and build your kind of website, all by yourself.Zyro is a site builder that allows you to create a beautiful website or a powerful eCommerce website in under an hour. You don’t need any prior knowledge in setting up websites or managing them either.Most of the website creation elements, from layout to design style, are taken care of for you when you use a site builder.</Typography>
                        </AccordionDetails>

                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant='h6'><b>Can I hos A website Hosted For Free</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To create a website, you’d normally need a lot of graphic design, programming, and marketing knowledge. Or, you’d need to hire experts of those industries, e.g. a web developer, to get everything done for you – that can get expensive.You can also use a content management system (CMS) to build your website yourself, but you’ll need a fair amount of tech knowledge to navigate the system.Luckily, you can also use a website builder to save money and time, and build your kind of website, all by yourself.Zyro is a site builder that allows you to create a beautiful website or a powerful eCommerce website in under an hour. You don’t need any prior knowledge in setting up websites or managing them either.Most of the website creation elements, from layout to design style, are taken care of for you when you use a site builder.</Typography>
                        </AccordionDetails>

                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant='h6'><b>Is Zyro Builedr SEO friendly</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To create a website, you’d normally need a lot of graphic design, programming, and marketing knowledge. Or, you’d need to hire experts of those industries, e.g. a web developer, to get everything done for you – that can get expensive.You can also use a content management system (CMS) to build your website yourself, but you’ll need a fair amount of tech knowledge to navigate the system.Luckily, you can also use a website builder to save money and time, and build your kind of website, all by yourself.Zyro is a site builder that allows you to create a beautiful website or a powerful eCommerce website in under an hour. You don’t need any prior knowledge in setting up websites or managing them either.Most of the website creation elements, from layout to design style, are taken care of for you when you use a site builder.</Typography>
                        </AccordionDetails>

                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography variant='h6'><b>Will my Zyro websitbe mobile friendly</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To create a website, you’d normally need a lot of graphic design, programming, and marketing knowledge. Or, you’d need to hire experts of those industries, e.g. a web developer, to get everything done for you – that can get expensive.You can also use a content management system (CMS) to build your website yourself, but you’ll need a fair amount of tech knowledge to navigate the system.Luckily, you can also use a website builder to save money and time, and build your kind of website, all by yourself.Zyro is a site builder that allows you to create a beautiful website or a powerful eCommerce website in under an hour. You don’t need any prior knowledge in setting up websites or managing them either.Most of the website creation elements, from layout to design style, are taken care of for you when you use a site builder.</Typography>
                        </AccordionDetails>

                    </Accordion>

                    <Divider />
                </Box>
                <br />
                <br />
                <Box height={300} textAlign={'center'} sx={{ background: '#F5F88D' }}>
                    <Typography paddingTop={10} variant='h2'>Got A  Business Idea? Build it with Zyro</Typography>
                    <Button sx={{ background: '#fb506e', color: '#fff', borderRadius: '25px' }}>Start for free</Button>

                </Box>
                <br />
                <br />
                <Box height={400}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box height={400} >
                                <Box component="img"
                                    sx={{
                                        height: 10,
                                        width: '100%',

                                    }}
                                    src="http://www.w3.org/2000/svg" />
                                <br /><Typography>Zyro is a powerful website builder that makes it easy for anyone to create a professional website or online store. Get your website online in under 1 hour and use AI tools to brand and grow your business. </Typography>
                                <br /><Typography><FacebookIcon /> <TwitterIcon /> <InstagramIcon /> <YouTubeIcon /> <LinkedInIcon /><PinterestIcon /></Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box height={400} >
                                Products<br /><br />
                                Website Builder<br />
                                Online store<br />
                                Features<br />
                                Website Templates<br />
                                Domains<br />
                                Business email<br />
                                Pricing<br />
                                Free domain<br />
                                Free hosting<br />
                                Landing page builder<br />
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box height={400} >
                                Company<br /><br />
                                About<br />
                                Contact<br />
                                Careers<br />
                                Press<br />
                                Affiliates<br />
                                Youtube creators<br />
                                Terms & privacy<br />
                                Sitemap
                            </Box>
                        </Grid>
                        <Grid item xs={2} >
                            <Box height={400} >
                                Resources<br /><br />
                                Blog<br />
                                Support<br />
                                Help center<br />
                                Sell online<br />
                                eCommerce website<br />
                                Business glossary<br />
                                Roadmap<br />
                                eCommerce guide<br />
                                Refer for $20<br />
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box height={400}>
                                AI Tools<br /><br />
                                Logo maker<br />
                                Image resizer<br />
                                Business name generator<br />
                                Slogan generator<br />
                                Blog title generator<br />
                                Heatmap<br />
                                AI Writer<br />
                                AI Image upscaler<br />
                                Image background remover<br />
                                Favicon generator<br />
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Typography>
                        © 2019-2022 Zyro.com – Website Builder, AI Powered Business Tools.
                    </Typography>
                </Box>
            </Box>

        </Box >
    );
}
