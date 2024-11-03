import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "../ui/button"
import Image from "next/image"
import menu from "@/public/menu.png"
import altMenu from "@/public/menu-2.png"
import styles from "@/styles/Navbar.module.css"

const DrawerNav = () => [
    <Drawer key={1}>
        <DrawerTrigger>
            <Image style={{ width: "28px", height: "28px" }} src={menu} alt="menu"></Image>
        </DrawerTrigger>
        <DrawerContent>
            {/* <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter> */}
            <ul className={styles.responsiveNavLinks}>
                <a href="/blaze"><li className={styles.responsiveNavLink}>Blaze</li></a>
                <a href="/#linkup"><li className={styles.responsiveNavLink}>Link Up</li></a>
                <a href="/#nearby"><li className={styles.responsiveNavLink}>Nearby</li></a>
                <a href="/#whats-new"><li className={styles.responsiveNavLink}>What's New</li></a>
            </ul>
        </DrawerContent>
    </Drawer>
]

export default DrawerNav