//link( next js)
import Link from "next/link";

// 넥스트 훅
import { usePathname } from "next/navigation";

// 프레머 모션
import { motion } from 'framer-motion';


const links = [
    {path: '/', name: 'home'},
    {path: '/projects', name: 'my projects'},
    {path: '/contact', name: 'contact'},
    
];

const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
    const path = usePathname();
    return (
    <nav className={`${containerStyles}`}>
      {links.map((link,index)=> {
        return (<Link 
        href={link.path} 
        key={index} 
        className={`capitalize ${linkStyles}`}>
            {link.path === path && (
                <motion.span 
                    initial={{y:'-100%'}} 
                    animate={{y:0}} 
                    transition={{type: 'tween'}}
                    layoutId='underline' 
                    className={`${underlineStyles}`}
                />
            )}
            {link.name}
        </Link>
        );
    })}
    </nav>
    );
};

export default Nav;