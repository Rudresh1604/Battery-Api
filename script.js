const batteryCharg = document.querySelector(".battery-charging");
const batteryLevel = document.querySelector(".battery-level");
const chargeTime = document.querySelector(".charge");
const dischargeTime = document.querySelector(".discharge");

// battery api

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeInfo();
      }
      updateAllBatteryDetails();
      // Battery Cahrging Change
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });
      function updateChargingInfo() {
        const isCharging = battery.charging ? "Yes" : "no";
        batteryCharg.innerHTML = isCharging;
      }
      // Battery Charge Time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeInfo();
      });
      function updateChargingTimeInfo() {
        const time = battery.chargingTime;
        chargeTime.innerHTML = time;
      }
      // Battery DisCharge Time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo() {
        const time = battery.dischargingTime;
        dischargeTime.innerHTML = time;
      }
      // battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level;
        batteryLevel.innerHTML = level * 100 + "%";
      }
    });
  }
};

battery();
