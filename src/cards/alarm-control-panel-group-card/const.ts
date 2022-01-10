import { PREFIX_NAME } from "../../const";

export const ALARM_CONTROl_PANEL_GROUP_CARD_NAME = `${PREFIX_NAME}-alarm-control-panel-group-card`;
export const ALARM_CONTROl_PANEL_GROUP_CARD_EDITOR_NAME = `${ALARM_CONTROl_PANEL_GROUP_CARD_NAME}-editor`;

export const ALARM_CONTROL_PANEL_GROUP_CARD_STATE_ICON = {
    disarmed: "mdi:shield-off-outline",
    arming: "mdi:shield-sync-outline",
    armed_home: "mdi:shield-home-outline",
    armed_night: "mdi:shield-moon-outline",
    armed_vacation: "mdi:shield-airplane-outline",
    triggered: "mdi:bell-ring-outline",
}
