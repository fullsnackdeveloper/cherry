// import "./Stats.scss";

import React from "react";
import { StatsProps } from "./Stats.types";

const Stats: React.FC<StatsProps> = ({ stats }) => {

    const renderStats = () => {
        return stats.map((s, index) => {
            const stat = [<div key={index} className="Stats-stat">
                <span className="Stats-stat-amount">{s.amount}</span>
                <span className="Stats-stat-measurement">{s.measurement}</span>
            </div>];
            if (index < stats.length - 1)
                stat.push(<div key={`seperator-${index}`} className="Stats-stat-seperator"></div>);
            return stat;
        })
    }

    return <div data-testid="Stats" className="Stats">
        {renderStats()}
    </div>
};

export default Stats;

