import './App.scss';
import thumb from './assets/thumb.png';
import { Button, Colors, Callout, Grid, Cell, Link} from 'react-foundation';

function Header() {
  return (
    <Grid className="top-bar grid-padding-x">
        <Cell small={12} medium={3}><span>My Company</span></Cell>
        <Cell small={12} medium={9}>
          <ul className="dropdown menu float-right vertical medium-horizontal" id="my-menu" data-dropdown-menu>
            <li><a href="">Home</a></li>
            <li>
              <a href="">About</a>
              {/* <ul class="menu">
                <li>Other Page</li>
                <li>Other Page</li>
                <li>Other Page</li>
              </ul> */}
            </li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </Cell>
    </Grid>

  )
}

function ImageContent() {
  return (
    <Grid upOnSmall={2} upOnMedium={4} upOnLarge={6} className="grid-margin-x grid-margin-y">
      <Cell>
        <img src={thumb} alt=""></img>
      </Cell>
      <Cell>
        <img src={thumb} alt=""></img>
      </Cell>
      <Cell>
        <img src={thumb} alt=""></img>
      </Cell>
      <Cell>
        <img src={thumb} alt=""></img>
      </Cell>
      <Cell>
        <img src={thumb} alt=""></img>
      </Cell>
      <Cell>
        <img src={thumb} alt=""></img>
      </Cell>
    </Grid>
  )
}

function Form() {
  return (
          <form>
            <Grid>
              <Cell>
                <h4>Fill out our form</h4>
              </Cell>
            </Grid>
            <Grid className="grid-margin-x">
              <Cell small={12} medium={6}>
                  <label> First Name
                    <input type="text"></input>
                  </label>
              </Cell>
              <Cell small={12} medium={6}>
                  <label> Last Name
                    <input type="text"></input>
                  </label>
              </Cell>
            </Grid>
            <Grid>
              <Cell small={12}>
                <label> Your Message
                    <textarea></textarea>
                </label>
              </Cell>
            </Grid>

            <Grid>
              <Cell small={12}>
                <fieldset className="fieldset">
                  <legend> When should we contact you?</legend>
                  <input id="contact1" type="radio" value="morning"/><label htmlFor="contact1">Morning</label>
                  <input id="contact2" type="radio" value="evening"/><label htmlFor="contact2">Evening</label>
                </fieldset>
                <input type="submit" className="button expanded" value="Contact us"></input>
              </Cell>
            </Grid>
          </form>
  )
}

function Sidebar() {
  return (
    <Cell small={12} medium={6} large={3} style={{backgroundColor: '#efefef'}}>
      <h3><a data-toggle="sidebar=menu">Important Topic</a></h3>
      <ul data-toggler="custom-class" data-animate="hinge-in-from-top fade-out">
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li><a href="">One more</a> Item</li>
      </ul>
      
      <Callout data-closable>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus orci sit amet diam rutrum, ut finibus nunc iaculis.</p>
        <Button color={Colors.ALERT} data-close>Okay</Button>
      </Callout>
    </Cell>
  )
}

function App() {

  return (
    <div className="small-collapse medium-uncollapse">
      <Header/>
      <Grid className="grid-padding-x grid-container">
        <Cell small={12} medium={6} large={9} className="is-animating">
          <div id="animateMain">
            <h1>My title</h1>
            <h3 className="subheader">My slightly less important heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus orci sit amet diam rutrum, ut finibus nunc iaculis. Vestibulum fringilla varius est, et vehicula nisl ornare eu. Quisque vitae viverra dui. Sed odio dui, congue nec sagittis eget, eleifend at magna. Integer volutpat consequat turpis, vitae lacinia risus efficitur at. Sed et tortor tristique, pharetra magna ac, pulvinar leo. Donec dictum sollicitudin arcu, sit amet luctus leo blandit ut. Fusce vulputate, risus sed ultricies volutpat, magna dolor hendrerit diam, at gravida sem turpis in ipsum. Donec sed porta justo. Mauris vel mi interdum, accumsan felis ut, sagittis orci. Quisque eget quam ut lacus tincidunt bibendum quis imperdiet metus. Phasellus rutrum molestie augue, at molestie ex. Nam eget euismod justo, in pharetra lorem. Quisque rhoncus enim at efficitur pulvinar. Nunc id diam efficitur, interdum turpis quis, lobortis risus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus orci sit amet diam rutrum, ut finibus nunc iaculis. Vestibulum fringilla varius est, et vehicula nisl ornare eu. Quisque vitae viverra dui. Sed odio dui, congue nec sagittis eget, eleifend at magna. Integer volutpat consequat turpis, vitae lacinia risus efficitur at. Sed et tortor tristique, pharetra magna ac, pulvinar leo. Donec dictum sollicitudin arcu, sit amet luctus leo blandit ut. Fusce vulputate, risus sed ultricies volutpat, magna dolor hendrerit diam, at gravida sem turpis in ipsum. Donec sed porta justo. Mauris vel mi interdum, accumsan felis ut, sagittis orci. Quisque eget quam ut lacus tincidunt bibendum quis imperdiet metus. Phasellus rutrum molestie augue, at molestie ex. Nam eget euismod justo, in pharetra lorem. Quisque rhoncus enim at efficitur pulvinar. Nunc id diam efficitur, interdum turpis quis, lobortis risus.
            </p>
            <Grid className="foo">
              <Cell small={12} medium={6} large={3}>
                <Link href="www.google.com" isExpanded>Order Now</Link>
              </Cell>
              <Cell small={12} medium={6} large={3} offsetOnLarge={6}>
                <Link href="www.google.com" isExpanded isHollow>Learn More</Link>
              </Cell>
            </Grid>
          </div>


          {/* <ImageContent></ImageContent> */}
          <hr></hr>
          <Form></Form>
        </Cell>
        <Sidebar></Sidebar>
      </Grid>
    </div>
  );
}

export default App;
