
import style from "../register.module.css"
import Shoemodel from "../../components/shoesmodel";
import { useRouter } from "next/router";
const Modelshow = () => {
    const router = useRouter()
    const { id } = router.query
    return <>

        <div className={style.container2}>
            <div className={style.loginbox3}>
                <Shoemodel id={id} />
            </div>
        </div>
    </>
}
export default Modelshow