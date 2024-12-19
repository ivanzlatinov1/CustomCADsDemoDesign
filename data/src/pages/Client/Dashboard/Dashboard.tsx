import { useEffect } from "react";
import Transition from "../../../components/Transition/Transition";
import BtnLink from "../../../components/Button/Button";
import CartItem from "./components/Cart";
import styles from "./Dashboard.module.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

const ClientDashboard: React.FC = () => {
    const username = "ClientUsername";
    const year = 2025;

    const purchaseData = [
        { month: 'jan', quantity: 22 },
        { month: 'feb', quantity: 3 },
        { month: 'mar', quantity: 14 },
        { month: 'apr', quantity: 19 },
        { month: 'may', quantity: 10 },
        { month: 'jun', quantity: 33 },
        { month: 'jul', quantity: 17 },
        { month: 'aug', quantity: 7 },
        { month: 'sep', quantity: 13 },
        { month: 'oct', quantity: 24 },
        { month: 'nov', quantity: 4 },
        { month: 'dec', quantity: 11 },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

        const dates = purchaseData.map(item => item.month);
        const quantities = purchaseData.map(item => item.quantity);

        const ctx = document.getElementById('myChart') as HTMLCanvasElement;

        if (ctx.chart) {
            ctx.chart.destroy();
        }

        const myChart = new ChartJS(ctx, {
            type: 'bar',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Models Ordered',
                    data: quantities,
                    backgroundColor: 'rgba(142, 54, 235, 0.2)',
                    borderColor: 'rgb(178, 54, 235)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                        }
                    }
                }
            }
        });

        ctx.chart = myChart;

        return () => {
            if (ctx.chart) {
                ctx.chart.destroy();
            }
        };
    }, [purchaseData]);

    return (
        <Transition>
            <div className={styles.container}>
                <h1>Welcome, {username}!</h1>
                <div className={styles.statistic}>
                    <div className={styles.stat}>
                        <h3>Monthly Model Sales Report ({year})</h3>
                        <canvas id="myChart"></canvas>
                    </div>
                    <div className={styles.carts}>
                        <div className={styles.title}><span>Recent Carts</span></div>
                        <CartItem number={1234} date="24-12-2024" itemsCount={2} />
                        <CartItem number={4321} date="10-12-2024" itemsCount={1} />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <BtnLink text="Your CADs" link="/cads" />
                    <BtnLink text="Purchases" link="/carts" />
                    <BtnLink text="Deliveries" link="/delivery" />
                    <BtnLink text="Order a Custom Model" link="/custom-models" />
                </div>
            </div>
        </Transition>
    );
};

export default ClientDashboard;
