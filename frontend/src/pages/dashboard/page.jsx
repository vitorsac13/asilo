import { LuHouse, LuCalendar, LuCircleUser, LuStethoscope, LuLogOut } from "react-icons/lu"
import styles from "./page.module.css"
import { useState } from "react"

export default function Dashboard() {

    const [posts] = useState([])

    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
      if (!auth || auth.user.role !== "admin") {
        navigate("/profile")
      }
    }, [])

    return (
        <div className={styles.dashboardWrapper}>

        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
            <h2 className={styles.logo}>ASILO</h2>

            <nav>
            <button><LuHouse size={18}/> Dashboard</button>
            <button><LuCircleUser size={18}/> Posts</button>
            </nav>

            <button className={styles.logoutBtn}>
            <LuLogOut size={18}/> Sair
            </button>
        </aside>

        {/* MAIN */}
        <main className={styles.dashboardMain}>
            <h1 className={styles.pageTitle}>Painel Administrativo</h1>
            <p className={styles.pageSubtitle}>Sistema de gestão de ILPI</p>

            {/* MÉTRICAS */}
            <div className={styles.statsGrid}>
            <div className={styles.statCard}>
                
            </div>
            </div>

        </main>
        </div>
    )
}