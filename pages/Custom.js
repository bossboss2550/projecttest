import styles from '../styles/Home.module.css'
import 'firebase/app'
import style from "./register.module.css";
import Custome from '../components/Customshoe';
import Showcus from '../components/ShowOrder';
import { useUser } from '../auth/useUser';
export default function Custom() {
    const { user, logout } = useUser()
    return (
        <div>

            <div>

                <Custome />
            </div>

        </div>
    )

}