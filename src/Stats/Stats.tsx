// import "./Stats.scss";

import clsx from "clsx";
import React from "react";
import { StatsProps } from "./Stats.types";

const Stats: React.FC<StatsProps> = ({ stats, className }) => {

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

    return <div data-testid="Stats" className={clsx("Stats", className)}>
        {renderStats()}
    </div>
};

export default Stats;

