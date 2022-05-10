import React, { useState } from "react";
import _cloneDeep from "lodash/cloneDeep";
import _map from "lodash/map";
import Setting from "./utils/setting";
import * as Styled from "./staffSettings.styles";
import StaffSettingHeader from "./utils/staffSettingHeader";

const StaffSettings: React.FC = () => {
  const [staffSettings, setStaffSettings] = useState<any>({
    audioNotifications: true,
    toastNotifications: false,
    shoppingCart: false,
    completedOrder: true,
    newClient: true,
    clientLogin: true,
    staffLogin: true
  });

  const handleToggleSetting = (key: string) => {
    const newSettings = _cloneDeep(staffSettings);
    newSettings[key] = !newSettings[key];
    setStaffSettings(newSettings);
  };

  const notificationAlert = [
    {
      name: "Audio Alerts",
      stateKey: "audioNotifications"
    },
    {
      name: "Toast Alerts",
      stateKey: "toastNotifications"
    }
  ];

  const notifications = [
    {
      name: "Shopping Cart",
      stateKey: "shoppingCart"
    },
    {
      name: "Completed Order",
      stateKey: "completedOrder"
    },
    {
      name: "New Client",
      stateKey: "newClient"
    },
    {
      name: "Client Login",
      stateKey: "clientLogin"
    },
    {
      name: "Staff Login",
      stateKey: "staffLogin"
    }
  ];

  return (
    <Styled.StaffSettingsWrapper role="list">
      <StaffSettingHeader name="Notification Alert" noMargin={true} />

      {_map(notificationAlert, (setting, index) => (
        <Setting
          key={index}
          toggleSetting={handleToggleSetting}
          stateKey={setting.stateKey}
          isChecked={staffSettings[setting.stateKey]}
          name={setting.name}
        />
      ))}

      <StaffSettingHeader name="Notifications" />

      {_map(notifications, (setting, index) => (
        <Setting
          key={index}
          toggleSetting={handleToggleSetting}
          stateKey={setting.stateKey}
          isChecked={staffSettings[setting.stateKey]}
          name={setting.name}
        />
      ))}
    </Styled.StaffSettingsWrapper>
  );
};

export default StaffSettings;
