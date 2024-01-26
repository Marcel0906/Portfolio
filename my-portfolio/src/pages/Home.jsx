import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div><h1>Hallo, ich bin Marcel Kubetin</h1> <p>DCI Student zum Full Stack Web Developer aus Bielefeld.</p> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius unde voluptas commodi nemo quia veritatis quisquam, expedita ad. Consequatur, velit corporis. Eaque, odit nihil facere explicabo, omnis fugiat harum ut amet repellendus cupiditate magni odio debitis error id mollitia dolores qui voluptates nisi fugit! Quisquam quas laborum esse quasi in, illo quae voluptas deleniti at voluptatem sed officia deserunt est alias minima fugiat recusandae vel quaerat tempore, veniam dolorem pariatur cumque. Sunt, optio ipsa! Quaerat earum aliquid nobis nemo nesciunt et vitae totam voluptatum ex dolor ipsum, esse ea minus est obcaecati aperiam tenetur omnis! Mollitia maxime ullam et amet odit architecto perferendis, aliquam porro iure corrupti tempora doloribus neque accusantium, distinctio quas adipisci rem. Vero sequi, officia adipisci harum, neque, dicta ducimus repudiandae maiores aperiam rem animi facere non magnam eligendi! Itaque minus porro molestias illo! Voluptatibus officiis in labore perspiciatis asperiores adipisci deleniti veniam dolorum harum iusto ad magnam nostrum dolorem beatae aut commodi sequi nam, ipsum quam neque est explicabo! Velit dicta inventore similique voluptates facere! Labore, quam quis explicabo fuga consequatur eius maxime in soluta aliquam. Quis molestias quod tenetur nisi necessitatibus recusandae, laborum maxime maiores voluptatem, architecto odit, aut corporis iste cum inventore voluptatibus cupiditate voluptates dignissimos quia molestiae? Iusto, non quae! Iusto, tempora magni? Obcaecati reiciendis laudantium sed, esse at laboriosam consequuntur magnam hic quam suscipit illum est adipisci quod animi voluptate amet, omnis sapiente aut, nisi tenetur impedit culpa. Quam laudantium, ratione quae facilis sequi, molestias officiis, obcaecati temporibus non similique nulla tempore adipisci voluptates accusantium aliquam suscipit veritatis fuga quod itaque illum iste quia id cupiditate. Facere alias, ex provident quis culpa laboriosam dolorem sint corrupti fuga autem possimus, harum labore commodi adipisci? Sed maxime fuga repellendus dignissimos dolore magnam esse molestiae voluptas nesciunt rerum mollitia et consectetur autem ad, quo, aut architecto culpa laudantium. Qui totam eaque cum voluptatum dicta fugit exercitationem omnis eius? Esse fugit amet voluptates illum neque rerum, vitae soluta voluptatem hic nemo totam omnis similique, ipsa deleniti voluptate corporis. Debitis officiis reprehenderit magnam dignissimos culpa asperiores est maxime minima beatae amet commodi quaerat delectus et porro, laboriosam quas eligendi iste earum aut laborum explicabo voluptates dolore. Quam velit nostrum voluptatum consectetur accusantium fugit esse voluptates veritatis, ut, facere earum inventore odit eos eum officia id ab reprehenderit unde necessitatibus quo fuga doloribus maiores adipisci. Quas illo labore asperiores quo libero expedita error dignissimos consectetur, vero dolorem optio, iste maiores, vitae odio dolor deleniti corrupti perferendis omnis itaque atque eligendi id deserunt facere! Quam quisquam, voluptate harum magnam, placeat labore nam, quibusdam iste consectetur itaque corrupti et praesentium. Illum molestiae culpa amet sit, reiciendis quae non quam, odit, alias vitae illo? Quae sed explicabo porro, aliquid earum nesciunt id amet nulla. Sunt quod impedit vitae quo, doloribus sint vero, optio officiis dolores voluptatibus omnis quasi neque. Molestias sapiente aut illo necessitatibus quos mollitia obcaecati blanditiis? Debitis libero esse hic totam? Eligendi, minima minus quod impedit ut dicta velit laudantium earum explicabo voluptate tempora saepe amet magnam necessitatibus?</p>
    <div className='icon-list'>
        <div className='icon1'>
        <FontAwesomeIcon icon={faLinkedin} />
    </div>
    <div className='icon2'>
    <FontAwesomeIcon icon={faGithub} />
    </div>
    <Link to="/about"><button className='btn'>Go to About</button></Link>   
    </div>
    </div>
   
  )

}

export default Home



// {/* <a href="/">Go to home</a> */} old version
