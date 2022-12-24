import { AiOutlineProfile } from "react-icons/ai";
import { SlGameController } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi"
import { AiFillCaretDown } from "react-icons/ai";
import { RxDotFilled } from 'react-icons/rx';
import { Routes, Route, useLocation } from "react-router-dom";

import "./about.styles.scss";
import { NavData } from "./NavData.data";
import { SubNav } from "../../component";
import { Personal, Formal, NonFormal, Skills, Interests } from "../../container";

const About = () => {

  const { pathname } = useLocation();
  let side_nav = []

  if (pathname === '/about') {
    side_nav.push('personal')
  } else {
    side_nav = pathname.split('/').slice(2)
  }

  return (
    <div className="main_about">
      <div className="icons">
        <AiOutlineProfile />
        <GiNotebook />
        <SlGameController />
      </div>

      <div className="drop_down">
        <div className="top">
          <AiFillCaretDown className="icon" />
          <p className="desk_text">personal-info</p>
          <p className="mobile_text">_about.me</p>
        </div>

        <div className="drop_down-link">
          {
            NavData.map(({ id, ...item }) => (
              <SubNav key={id} item={item} />
            ))
          }
        </div>
      </div>

      <div className="content">
        <div className="top">
          <div className="top_content">
            {side_nav}
            <RxDotFilled />
          </div>
        </div>

        <div className="bottom">
          <div className="left_content">
            <Routes>
              <Route path="/" element={<Personal />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/formal" element={<Formal />} />
              <Route path="/non-formal" element={<NonFormal />} />
              <Route path="/interest" element={<Interests />} />
            </Routes>
          </div>

          <div className="right_content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, voluptate. Accusantium voluptates minus sit totam laborum officiis, temporibus expedita possimus voluptatibus corporis beatae voluptatem esse iusto nesciunt omnis nisi commodi ex quas fugit repellat. Ut cum iste vero possimus, quasi ea facere, earum aut assumenda repellendus suscipit fugiat provident omnis! Aut tempore recusandae nisi officiis, amet delectus, dolorem, omnis ipsa officia corrupti maiores ullam dolorum perspiciatis! Quis a quo excepturi asperiores amet minima explicabo, rem, aperiam tempora cupiditate in et ipsam error aliquam vitae deserunt ad laborum! Quae vitae blanditiis laborum fugiat, voluptas, maiores suscipit quibusdam excepturi rerum deleniti asperiores voluptatibus earum officiis quod. Quo itaque molestias, tempora, voluptatibus eum perspiciatis nostrum asperiores similique corrupti perferendis dolores ipsum fuga praesentium. Corporis officiis veritatis obcaecati vel quod tempore numquam, dolores, sit accusamus ipsam debitis quibusdam blanditiis nisi officia unde perferendis esse aperiam, dolor iusto? Optio, explicabo quam! Consequatur debitis non vero! Dolore eos, tenetur ratione odio rem voluptatibus porro aliquam. Illo eius accusantium aliquam deserunt voluptate unde. Dicta facilis molestiae temporibus voluptates voluptatem vitae sint, magnam quam, voluptatibus dolorum at harum aliquam repellat sit soluta totam? Cumque totam repellat obcaecati illum, similique, possimus saepe enim tempore aperiam atque illo quis voluptatem in quae unde tenetur sit deserunt architecto dolorum? Sint quibusdam cum porro incidunt repudiandae, nesciunt, pariatur asperiores repellat maxime omnis voluptates facilis perferendis obcaecati sequi, blanditiis dicta ratione? Voluptatum, amet nesciunt animi rerum quidem culpa sunt magnam, quisquam quod aspernatur nostrum odio fuga. Iusto, tenetur iure delectus voluptas placeat in debitis obcaecati commodi itaque exercitationem pariatur fuga voluptates. Quos rerum adipisci blanditiis rem, amet odio voluptatum qui ratione sapiente deleniti nobis officiis facere quasi eius nihil iste soluta! Corrupti sed sunt possimus nemo voluptatibus, eum a qui. Odit, autem similique? Aperiam quasi molestiae numquam adipisci libero possimus distinctio cum beatae incidunt, sed, commodi, cupiditate est eos. Culpa amet labore error molestiae ut esse, atque harum non perspiciatis, rerum, odio temporibus illo quo animi. Reiciendis nemo maxime, illum quos eos labore at similique exercitationem tenetur mollitia. Recusandae, suscipit, corrupti id ducimus culpa laboriosam dolorum perspiciatis, molestias earum sequi accusantium ex nesciunt voluptate molestiae hic nulla repellat! Accusantium nulla commodi maxime voluptates assumenda! Amet saepe consectetur fugiat sint natus laboriosam aut magni ipsam, perspiciatis ea assumenda consequatur aperiam molestiae totam molestias, eveniet omnis inventore asperiores corrupti excepturi sapiente repellat officiis temporibus! Eius repudiandae praesentium animi quisquam vero itaque tenetur, quis quod, iusto earum quos, rerum minima cum velit. Fuga eius blanditiis consectetur! Ab nobis aperiam rem sequi tempora minus cupiditate obcaecati? Totam magnam consectetur maxime, vel tenetur ex eius repellendus provident esse officiis illo commodi aperiam impedit. Obcaecati qui omnis quisquam fuga ipsa nobis modi dicta nihil veniam nemo optio rerum quod eius consectetur, debitis praesentium blanditiis unde maiores. Laborum, nisi itaque veniam repellendus quae recusandae, soluta porro velit magnam ducimus perferendis quod sit. Pariatur, eligendi! Nemo similique consequuntur cumque quia, sit consequatur non corporis sed harum at, neque labore, repellendus earum. Velit voluptatem blanditiis quo cupiditate, facilis fugit dolor, iure omnis at ratione doloribus magnam? Ad provident velit quibusdam ex, totam nobis earum voluptatibus quasi odit autem ab excepturi ullam asperiores corporis tenetur pariatur id distinctio quam sed saepe accusamus voluptates. Quasi totam odit, fugit eos exercitationem facilis asperiores. Eligendi aliquid velit fugiat iusto enim iste nulla repellat? Voluptatibus dolorem aperiam autem laborum, sapiente sunt laudantium corrupti vel pariatur? Ratione, doloremque harum! Error est aut nisi, alias hic a vel, similique eum recusandae culpa possimus excepturi enim. Animi unde officia laboriosam maxime nesciunt explicabo saepe beatae quos aut. Natus voluptatibus, illum exercitationem ea, nihil delectus voluptatem quasi ad a totam eaque eius dolores. Deserunt repellendus dolore ex quam, alias temporibus eligendi. Explicabo, ea sapiente? Temporibus quae minus pariatur tempora. Enim ullam quam sapiente excepturi harum tenetur eaque voluptatibus ab iusto corporis iure molestias similique hic consequatur quos, quaerat velit sequi sunt? Assumenda dicta quo deleniti aliquam adipisci doloribus, sit modi pariatur hic eaque sint. Nemo aspernatur possimus et quam facere? Architecto deserunt at dolor eum incidunt provident vero labore animi quisquam perferendis, nihil dignissimos eaque laborum quae harum? Assumenda, blanditiis? Cum doloribus ipsam veniam provident veritatis officia, quis placeat rerum voluptate dolor dolorem ea fugit, inventore porro nesciunt a ab praesentium excepturi qui. Adipisci doloremque reprehenderit voluptatum beatae rem distinctio quo ut quae asperiores minima cupiditate esse debitis temporibus, laborum culpa in labore sequi autem repellendus odio voluptate ab facere perferendis! Porro at non voluptatem suscipit facilis corporis ipsum, vel saepe delectus maiores nihil animi sequi qui veniam, aut fugiat aliquam deserunt, aperiam incidunt voluptates. Odit, exercitationem soluta. Laborum eligendi, repellat explicabo cupiditate eaque recusandae, dolore eveniet est provident fugit dicta omnis veritatis consectetur! Distinctio inventore aliquam quidem perspiciatis eos esse repellat nesciunt dolorem eius numquam reiciendis aliquid corporis, deleniti fugiat doloribus reprehenderit, dicta vel quisquam repellendus voluptates odio nisi voluptas! Mollitia et similique eveniet iste natus. Aliquid corporis adipisci quas, nesciunt totam a distinctio eius dignissimos cum enim dolore nemo quaerat accusamus ullam nostrum voluptatum placeat facere. Molestias cumque voluptates nesciunt voluptatibus vero cupiditate officiis impedit perspiciatis quidem inventore facilis quis, temporibus illo voluptatem mollitia atque fugiat praesentium dolorum iusto, eligendi maxime cum! Eius ratione quos rerum dolores assumenda facere reiciendis in, distinctio labore molestiae praesentium dolore minima nostrum repellat, necessitatibus quae id illum nam facilis iusto consequuntur! Quaerat eaque est error nihil eveniet nam. Est, laudantium ipsam. Sint sed quas, natus tempora aut atque illum dolore, excepturi adipisci tenetur soluta! Est dolore quia culpa sunt maxime maiores natus delectus consequatur sapiente iusto omnis unde, voluptatem nihil debitis. Sunt, nam! Inventore vitae molestias, cumque corporis ab aspernatur soluta laboriosam non, eligendi reprehenderit facere unde tenetur? Architecto vero hic expedita reiciendis officia, debitis dolorum eveniet dolores vitae blanditiis voluptatibus sit repellat? Maxime veritatis hic magnam natus, quis sunt! Tempore veniam odio repudiandae cumque tenetur quos doloremque, veritatis, optio minima quam consectetur, excepturi id dolorum autem dolorem nesciunt ut rerum? Repellendus, similique quaerat totam beatae mollitia dolorum enim placeat eveniet! Cum odio libero nesciunt fugiat aperiam dolore ullam aspernatur id provident at
          </div>
        </div>

      </div>
    </div>
  )
}

export default About


/**
 * for the drop down linking to the side icons
 * 
 * create a useState(false) = [actiive, setActive]
 * add class {active && 'active'}
 * create an function that to toggle the active state when the dropdown is triggered
 * which also shows the content of the drop down
 * 
 * 
 * for drop down link linking to the tab
 * 
 * 
 */