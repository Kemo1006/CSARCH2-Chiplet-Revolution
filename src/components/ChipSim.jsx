import React, { useState, useMemo, useEffect } from 'react';

export default function ChipSim() {
  const [architecture, setArchitecture] = useState('monolithic');
  const [coreCount, setCoreCount] = useState(16);
  const [defectDensity, setDefectDensity] = useState(0.5);

  const stats = useMemo(() => {
    const alpha = 3;
    const areaPerCore = 15;
    
    let areaPerDie = architecture === 'monolithic' ? coreCount * areaPerCore : 4 * areaPerCore;
    let yieldPercentage = Math.pow(1 + (defectDensity * (areaPerDie / 100)) / alpha, -alpha);
    
    const isOverLimit = architecture === 'monolithic' && areaPerDie > 800;
    const finalYield = isOverLimit ? 0 : (yieldPercentage * 100);

    // Approximate chips per 300mm wafer (usable area roughly 60,000mm²)
    const chipsPerWafer = isOverLimit ? 0 : Math.floor((60000 * yieldPercentage) / areaPerDie);

    let grade = 'A';
    if (finalYield < 20) grade = 'F';
    else if (finalYield < 40) grade = 'D';
    else if (finalYield < 60) grade = 'C';
    else if (finalYield < 80) grade = 'B';

    return {
      yield: finalYield.toFixed(1),
      chips: chipsPerWafer,
      grade: isOverLimit ? 'F' : grade,
      isOverLimit
    };
  }, [architecture, coreCount, defectDensity]);

  const [defects, setDefects] = useState([]);
  
  useEffect(() => {
    // Generate random defect dots for the visualizer
    const numDefects = Math.floor(defectDensity * 300);
    const newDefects = [];
    for (let i = 0; i < numDefects; i++) {
      newDefects.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      });
    }
    setDefects(newDefects);
  }, [defectDensity]);

  return (
    <div className="sim-wrapper">
      
      {/* LEFT SIDEBAR */}
      <div className="sim-sidebar">
        <div className="sim-header">SIM_CONTROL_PANEL</div>
        
        <div className="sim-toggle-group">
          <button 
            className={`sim-toggle ${architecture === 'monolithic' ? 'active' : ''}`}
            onClick={() => setArchitecture('monolithic')}
          >
            MONOLITHIC
          </button>
          <button 
            className={`sim-toggle ${architecture === 'chiplet' ? 'active' : ''}`}
            onClick={() => setArchitecture('chiplet')}
          >
            CHIPLET
          </button>
        </div>

        <div className="sim-controls">
          <div className="sim-control-item">
            <div className="sim-label">
              <span>TARGET_CORES</span>
              <span className="sim-value">{coreCount}</span>
            </div>
            <input 
              type="range" min="4" max="64" step="4" 
              value={coreCount} 
              onChange={(e) => setCoreCount(Number(e.target.value))}
            />
          </div>

          <div className="sim-control-item">
            <div className="sim-label">
              <span>DEFECT_DENSITY (cm²)</span>
              <span className="sim-value">{defectDensity.toFixed(2)}</span>
            </div>
            <input 
              type="range" min="0.1" max="2.0" step="0.1" 
              value={defectDensity} 
              onChange={(e) => setDefectDensity(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="sim-telemetry">
          <h4 className="sim-telemetry-title">TELEMETRY</h4>
          
          <div className="sim-stats-grid">
            <div className="sim-stat-box">
              <span className="stat-label">YIELD</span>
              <span className={`stat-value ${stats.yield < 50 ? 'danger' : 'safe'}`}>
                {stats.yield}%
              </span>
            </div>
            <div className="sim-stat-box">
              <span className="stat-label">CHIPS/WFR</span>
              <span className="stat-value text-white">{stats.chips}</span>
            </div>
          </div>

          <div className="sim-grade-box">
            <span className="stat-label">GRADE</span>
            <span className="grade-value">{stats.grade}</span>
          </div>
        </div>
      </div>

      {/* RIGHT VISUALIZER */}
      <div className="sim-visualizer">
        <div className="wafer-container">
          <div className={`wafer-grid ${architecture}`}>
            {defects.map(defect => (
              <div 
                key={defect.id} 
                className="defect-dot"
                style={{ top: defect.top, left: defect.left }}
              ></div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}