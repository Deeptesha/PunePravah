// PUNE PRAVAH - CLIENT-SIDE INTERACTIVE ENGINE WITH SQL INTEGRATION

// ==================================================
// 1. LOCALIZATION DICTIONARY (EN, HI, MR)
// ==================================================
const LOCALIZATION = {
  en: {
    nav_dashboard: "Dashboard",
    nav_checklist: "Checklist",
    nav_travel: "Travel",
    nav_settings: "Settings",
    sos_btn: "EMERGENCY CONTACT SOS",
    alert_red_title: "RED ALERT: Heavy Rainfall Expected",
    alert_red_desc: "Severe waterlogging reported in Deccan Gymkhana and Kothrud. Avoid unnecessary travel.",
    badge_active: "ACTIVE",
    intensity_label: "Current Intensity",
    river_label: "River Mutha Level",
    river_subtext: "▲ Approaching Danger Level",
    humidity: "Humidity",
    wind: "Wind",
    visibility: "Visibility",
    flood_risk_title: "Localized Flood Risk",
    toggle_water: "Water Level",
    toggle_traffic: "Traffic",
    legend_high: "High Risk",
    legend_mod: "Moderate Risk",
    checklist_title: "Monsoon Preparedness",
    checklist_subtitle: "Complete these crucial tasks to ensure safety during heavy rainfall.",
    progress_lbl: "Overall Progress",
    home_safety_title: "Home Preparation",
    emergency_kit_title: "Emergency Kit",
    documents_title: "Documents",
    chk_gutters_title: "Clear Gutters & Drains",
    chk_gutters_desc: "Remove leaves and debris to prevent waterlogging around foundation.",
    chk_electricals_title: "Secure Electricals",
    chk_electricals_desc: "Elevate ground-level appliances and cover exposed wiring.",
    chk_roof_title: "Check Roof for Leaks",
    chk_roof_desc: "Inspect tiles and apply waterproof sealant where necessary.",
    chk_water_title: "Drinking Water",
    chk_water_desc: "Store at least 5 liters per person for 3 days.",
    chk_meds_title: "First Aid & Meds",
    chk_meds_desc: "Fully stocked first aid kit and essential prescription medications.",
    chk_flashlight_title: "Flashlights & Batteries",
    chk_flashlight_desc: "Ensure functional flashlights and extra waterproof batteries.",
    chk_umbrella_title: "Umbrella & Raincoat",
    chk_umbrella_desc: "Keep premium rain gear ready for all family members.",
    chk_docs_title: "ID, Insurance, House Papers",
    chk_docs_desc: "Keep documents safe in waterproof zip-lock bags.",
    chk_contacts_title: "Hardcopy of Emergency Contacts",
    chk_contacts_desc: "Printed backup list in case of network outages.",
    sync_btn: "SYNC PROGRESS",
    travel_advisory_title: "Travel Advisory",
    active_alerts_lbl: "ACTIVE ALERTS ON ROUTE",
    waterlogging_title: "Severe Waterlogging",
    waterlogging_desc: "Karve Road near Garware College is submerged. Avoid this route.",
    delay_25: "Delay: +25 mins",
    congestion_title: "Heavy Congestion",
    congestion_desc: "Slow moving traffic on FC Road due to diversions.",
    recommended_route_title: "Recommended Safe Route",
    recommended_route_desc: "Take Senapati Bapat Road → University Circle. Clear path, estimated 18 mins.",
    active_advisories_title: "Active Advisories",
    active_advisories_subtitle: "Real-time updates for Pune",
    submerged_title: "Severe Waterlogging",
    sinhagad_submerged_desc: "Sinhagad Road underpass is completely submerged. Divert via bypass immediately.",
    congestion_swargate_title: "Heavy Congestion",
    swargate_desc: "Swargate intersection experiencing 45+ minute delays due to ongoing metro work.",
    road_closed_title: "Route Closed",
    koregaon_closed_desc: "Koregaon Park North Main Road sealed for emergency repairs. Seek alternatives.",
    time_2m: "Updated 2m ago",
    time_15m: "Updated 15m ago",
    time_1h: "Updated 1h ago",
    settings_title: "Settings",
    settings_subtitle: "Configure your personal preferences for monsoon alerts and app behavior.",
    pref_language: "Preferred Language",
    alert_notifications: "Alert Notifications",
    push_notif_title: "Push Notifications",
    push_notif_desc: "Receive instant alerts directly on your device screen. Recommended for fastest response.",
    sms_notif_title: "SMS Messages",
    sms_notif_desc: "Receive text messages. Useful when internet connectivity is poor during heavy rains.",
    btn_reset: "Reset Defaults",
    btn_save: "Save Preferences",
    connected_account: "CONNECTED ACCOUNT",
    pune_resident: "Pune Resident",
    edit_identity: "Edit Identity",
    system_alert: "SYSTEM ALERT: CONNECTION LOST",
    sync_failed: "Sync Failed",
    sync_failed_desc: "Unable to retrieve your emergency safety checklist data. This is typically due to poor connectivity or heavy rain disrupting network signals in the area.",
    btn_retry: "Retry Connection",
    btn_offline: "View Offline Cached Data",
    offline_mode_title: "Offline Mode Availability",
    offline_mode_desc: "Critical preparedness items accessed recently are still available offline. High-contrast mode remains active to ensure readability."
  },
  hi: {
    nav_dashboard: "डैशबोर्ड",
    nav_checklist: "चेकलिस्ट",
    nav_travel: "यात्रा",
    nav_settings: "सेटिंग्स",
    sos_btn: "आपातकालीन संपर्क एसओएस",
    alert_red_title: "रेड अलर्ट: भारी बारिश की चेतावनी",
    alert_red_desc: "डेक्कन जिमखाना और कोथरुड में गंभीर जलजमाव की सूचना। अनावश्यक यात्रा से बचें।",
    badge_active: "सक्रिय",
    intensity_label: "वर्तमान तीव्रता",
    river_label: "मुठा नदी का स्तर",
    river_subtext: "▲ खतरे के स्तर के करीब",
    humidity: "आर्द्रता",
    wind: "हवा",
    visibility: "दृश्यता",
    flood_risk_title: "स्थानीय बाढ़ का खतरा",
    toggle_water: "पानी का स्तर",
    toggle_traffic: "यातायात",
    legend_high: "उच्च जोखिम",
    legend_mod: "मध्यम जोखिम",
    checklist_title: "मानसून की तैयारी",
    checklist_subtitle: "भारी बारिश के दौरान सुरक्षा सुनिश्चित करने के लिए इन महत्वपूर्ण कार्यों को पूरा करें।",
    progress_lbl: "कुल प्रगति",
    home_safety_title: "घर की तैयारी",
    emergency_kit_title: "आपातकालीन किट",
    documents_title: "दस्तावेज़",
    chk_gutters_title: "नालों और नालियों की सफाई",
    chk_gutters_desc: "घर के चारों ओर जलभराव को रोकने के लिए कचरे को साफ करें।",
    chk_electricals_title: "बिजली उपकरणों को सुरक्षित रखें",
    chk_electricals_desc: "बिजली के उपकरणों को जमीन से ऊपर रखें और खुले तारों को ढक दें।",
    chk_roof_title: "छत के रिसाव की जाँच करें",
    chk_roof_desc: "टाइल की जांच करें और जहां आवश्यक हो वाटरप्रूफ सीलेंट लगाएं।",
    chk_water_title: "पीने का पानी",
    chk_water_desc: "3 दिनों के लिए प्रति व्यक्ति कम से कम 5 लीटर पानी स्टोर करें।",
    chk_meds_title: "प्राथमिक चिकित्सा और दवाएं",
    chk_meds_desc: "पूरी तरह से स्टॉक की गई प्राथमिक चिकित्सा किट और आवश्यक दवाएं रखें।",
    chk_flashlight_title: "फ्लैशलाइट और बैटरी",
    chk_flashlight_desc: "काम करने वाली फ्लैशलाइट और अतिरिक्त बैटरी सुनिश्चित करें।",
    chk_umbrella_title: "छतरी और बरसाती (रेनकोट)",
    chk_umbrella_desc: "परिवार के सभी सदस्यों के लिए अच्छी गुणवत्ता वाले बरसाती गियर तैयार रखें।",
    chk_docs_title: "आईडी, बीमा, मकान के कागजात",
    chk_docs_desc: "दस्तावेजों को वाटरप्रूफ जिप-लॉक बैग में सुरक्षित रखें।",
    chk_contacts_title: "आपातकालीन संपर्कों की हार्डकॉपी",
    chk_contacts_desc: "नेटवर्क आउटेज के मामले में मुद्रित बैकअप सूची रखें।",
    sync_btn: "प्रगति सिंक करें",
    travel_advisory_title: "यात्रा सलाह",
    active_alerts_lbl: "मार्ग पर सक्रिय अलर्ट",
    waterlogging_title: "गंभीर जलभराव",
    waterlogging_desc: "गरवारे कॉलेज के पास कर्वे रोड जलमग्न है। इस मार्ग से बचें।",
    delay_25: "देरी: +25 मिनट",
    congestion_title: "भारी ट्रैफिक जाम",
    congestion_desc: "रूट डायवर्जन के कारण एफसी रोड पर वाहनों की धीमी गति।",
    recommended_route_title: "अनुशंसित सुरक्षित मार्ग",
    recommended_route_desc: "सेनापति बापट रोड → यूनिवर्सिटी सर्कल लें। स्पष्ट मार्ग, अनुमानित 18 मिनट।",
    active_advisories_title: "सक्रिय सलाह",
    active_advisories_subtitle: "पुणे के लिए लाइव अपडेट",
    submerged_title: "गंभीर जलभराव",
    sinhagad_submerged_desc: "सिंहगढ़ रोड अंडरपास पूरी तरह से जलमग्न है। तुरंत बाईपास से जाएं।",
    congestion_swargate_title: "भारी ट्रैफिक",
    swargate_desc: "मेट्रो काम के कारण स्वारगेट चौराहे पर 45+ मिनट की देरी।",
    road_closed_title: "सड़क बंद",
    koregaon_closed_desc: "कोरेगांव पार्क नॉर्थ मेन रोड को मरम्मत के लिए सील कर दिया गया है।",
    time_2m: "2 मिनट पहले अपडेट किया गया",
    time_15m: "15 मिनट पहले अपडेट किया गया",
    time_1h: "1 घंटा पहले अपडेट किया गया",
    settings_title: "सेटिंग्स",
    settings_subtitle: "मानसून अलर्ट और ऐप व्यवहार के लिए अपनी व्यक्तिगत प्राथमिकताएं कॉन्फ़िगर करें।",
    pref_language: "पसंदीदा भाषा",
    alert_notifications: "अलर्ट सूचनाएं",
    push_notif_title: "पुश सूचनाएं",
    push_notif_desc: "सीधे अपने डिवाइस की स्क्रीन पर तुरंत अलर्ट प्राप्त करें।",
    sms_notif_title: "एसएमएस संदेश",
    sms_notif_desc: "पाठ संदेश प्राप्त करें। खराब कनेक्टिविटी के दौरान उपयोगी।",
    btn_reset: "डिफ़ॉल्ट रीसेट करें",
    btn_save: "प्राथमिकताएं सहेजें",
    connected_account: "कनेक्टेड खाता",
    pune_resident: "पुणे निवासी",
    edit_identity: "पहचान संपादित करें",
    system_alert: "सिस्टम अलर्ट: कनेक्शन खो गया",
    sync_failed: "सिंक विफल रहा",
    sync_failed_desc: "आपकी आपातकालीन सुरक्षा चेकलिस्ट पुनर्प्राप्त करने में असमर्थ। यह आमतौर पर खराब कनेक्टिविटी या भारी बारिश के कारण होता है।",
    btn_retry: "कनेक्शन पुनः प्रयास करें",
    btn_offline: "ऑफ़लाइन कैश डेटा देखें",
    offline_mode_title: "ऑफ़लाइन मोड उपलब्धता",
    offline_mode_desc: "हाल ही में एक्सेस की गई महत्वपूर्ण तैयारी वस्तुएं अभी भी ऑफ़लाइन उपलब्ध हैं।"
  },
  mr: {
    nav_dashboard: "डॅशबोर्ड",
    nav_checklist: "चेकलिस्ट",
    nav_travel: "प्रवास",
    nav_settings: "सेटिंग्स",
    sos_btn: "आपत्कालीन संपर्क एसओएस",
    alert_red_title: "लाल इशारा: अत्यंत मुसळधार पावसाचा अंदाज",
    alert_red_desc: "डेक्कन जिमखाना आणि कोथरूडमध्ये मुसळधार पाणी साचले आहे. विनाकारण प्रवास टाळा.",
    badge_active: "सक्रिय",
    intensity_label: "सध्याची तीव्रता",
    river_label: "मुठा नदीची पातळी",
    river_subtext: "▲ धोक्याच्या पातळीजवळ",
    humidity: "आर्द्रता",
    wind: "वारा",
    visibility: "दृश्यमानता",
    flood_risk_title: "स्थानिक पूर धोका",
    toggle_water: "पाण्याची पातळी",
    toggle_traffic: "वाहतूक",
    legend_high: "उच्च धोका",
    legend_mod: "मध्यम धोका",
    checklist_title: "पावसाळी पूर्वतयारी",
    checklist_subtitle: "मुसळधार पावसाच्या वेळी सुरक्षित राहण्यासाठी ही कामे पूर्ण करा.",
    progress_lbl: "एकूण प्रगती",
    home_safety_title: "घराची पूर्वतयारी",
    emergency_kit_title: "आपत्कालीन किट",
    documents_title: "कागदपत्रे",
    chk_gutters_title: "नाले आणि गटारे साफ करा",
    chk_gutters_desc: "घराभोवती पाणी साचू नये म्हणून कचरा साफ करा.",
    chk_electricals_title: "वीज उपकरणे सुरक्षित करा",
    chk_electricals_desc: "उपकरणे जमिनीपासून वर ठेवा आणि उघड्या तारा झाकून ठेवा.",
    chk_roof_title: "छताची गळती तपासा",
    chk_roof_desc: "कौले तपासा आणि गळती असल्यास वॉटरप्रूफ सीलंट लावा.",
    chk_water_title: "पिण्याचे पाणी",
    chk_water_desc: "३ दिवसांसाठी प्रति व्यक्ती किमान ५ लीटर पाणी साठवा.",
    chk_meds_title: "प्रथमोपचार आणि औषधे",
    chk_meds_desc: "प्रथमोपचार किट आणि आवश्यक औषधे पूर्णपणे भरून ठेवा.",
    chk_flashlight_title: "फ्लॅशलाइट आणि बॅटरी",
    chk_flashlight_desc: "चालू फ्लॅशलाइट आणि अतिरिक्त बॅटरीची खात्री करा.",
    chk_umbrella_title: "छत्री आणि रेनकोट",
    chk_umbrella_desc: "कुटुंबातील सर्व सदस्यांसाठी दर्जेदार पावसाळी साहित्य तयार ठेवा.",
    chk_docs_title: "आयडी, विमा, घराची कागदपत्रे",
    chk_docs_desc: "कागदपत्रे वॉटरप्रूफ झिप-लॉक बॅगमध्ये सुरक्षित ठेवा.",
    chk_contacts_title: "आपत्कालीन संपर्कांची छापील प्रत",
    chk_contacts_desc: "नेटवर्क नसताना वापरण्यासाठी छापील आपत्कालीन क्रमांक जवळ ठेवा.",
    sync_btn: "माहिती सिंक करा",
    travel_advisory_title: "प्रवास सल्ला",
    active_alerts_lbl: "मार्गावरील सक्रिय यादी",
    waterlogging_title: "गंभीर पाणी साचले",
    waterlogging_desc: "गरवारे कॉलेजजवळ कर्वे रोड पाण्याखाली आहे. हा मार्ग टाळा.",
    delay_25: "उशीर: +२५ मिनिटे",
    congestion_title: "प्रचंड वाहतूक कोंडी",
    congestion_desc: "वाहतूक वळवल्यामुळे एफसी रस्त्यावर वाहनांचा वेग मंदावला आहे.",
    recommended_route_title: "शिफारस केलेला सुरक्षित मार्ग",
    recommended_route_desc: "सेनापती बापट रस्ता → युनिव्हर्सिटी चौक मार्गे जा. मार्ग मोकळा, अंदाजे १८ मिनिटे.",
    active_advisories_title: "सक्रिय सल्ले",
    active_advisories_subtitle: "पुणे शहराचे लाइव्ह अपडेट्स",
    submerged_title: "गंभीर पाणी साचले",
    sinhagad_submerged_desc: "सिंहगड रस्ता भुयारी मार्ग पूर्णपणे पाण्याखाली गेला आहे. बायपास मार्गे जा.",
    congestion_swargate_title: "प्रचंड वाहतूक कोंडी",
    swargate_desc: "मेट्रोच्या कामामुळे स्वारगेट चौकात ४५+ मिनिटांचा विलंब होत आहे.",
    road_closed_title: "रस्ता बंद",
    koregaon_closed_desc: "कोरेगाव पार्क उत्तर मुख्य रस्ता दुरुस्तीसाठी बंद करण्यात आला आहे.",
    time_2m: "२ मिनिटांपूर्वी",
    time_15m: "१५ मिनिटांपूर्वी",
    time_1h: "१ तासापूर्वी",
    settings_title: "सेटिंग्स",
    settings_subtitle: "पावसाळा अलर्ट आणि अ‍ॅप वर्तनासाठी तुमची प्राधान्ये सेट करा.",
    pref_language: "पसंतीची भाषा",
    alert_notifications: "अलर्ट सूचना",
    push_notif_title: "पुश सूचना",
    push_notif_desc: "थेट स्क्रीनवर झटपट सूचना मिळवा. जलद प्रतिसाद मिळवण्यासाठी शिफारस केली जाते.",
    sms_notif_title: "एसएमएस संदेश",
    sms_notif_desc: "एसएमएस द्वारे संदेश मिळवा. नेटवर्क खराब असताना उपयुक्त.",
    btn_reset: "डीफॉल्ट रीसेट करा",
    btn_save: "प्राधान्ये जतन करा",
    connected_account: "कनेक्ट केलेले खाते",
    pune_resident: "पुणे रहिवासी",
    edit_identity: "ओळख संपादित करा",
    system_alert: "सिस्टम अलर्ट: कनेक्शन हरवले",
    sync_failed: "सिंक अयशस्वी",
    sync_failed_desc: "आपत्कालीन सुरक्षा चेकलिस्ट डेटा मिळवता आला नाही. नेटवर्क अडथळ्यांमुळे हे घडते.",
    btn_retry: "पुन्हा प्रयत्न करा",
    btn_offline: "ऑफलाईन डेटा पहा",
    offline_mode_title: "ऑफलाईन उपलब्धता",
    offline_mode_desc: "नुकताच पाहिलेला डेटा ऑफलाईन उपलब्ध राहील."
  }
};

let currentLanguage = 'en';

// SVG map coordinate data for routing
const ROUTE_DATA = {
  kothrud: { name: "Kothrud", coords: [120, 400] },
  baner: { name: "Baner", coords: [100, 150] },
  hinjawadi: { name: "Hinjawadi", coords: [50, 220] },
  sinhagad: { name: "Sinhagad Rd", coords: [160, 420] },
  shivaji_nagar: { name: "Shivaji Nagar", coords: [320, 100] },
  deccan: { name: "Deccan Gymkhana", coords: [320, 200] },
  yerawada: { name: "Yerawada", coords: [420, 80] }
};

// ==================================================
// 2. INITIALIZATION & STATE MANAGEMENT
// ==================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTheme();
  initChecklist();
  initTravelVariants();
  initSettings();
  initDebugControls();
  
  // Dashboard SOS, Map toggles, and Near Me initialization
  initDashboardSOS();
  initMapLayers();
  initNearMeButton();
  
  // SQL API data fetch calls
  fetchUserProfile();
  fetchSQLContacts();
  
  // Set default route visual
  updateAdvisoryRoute();
  
  // Load unified meteorological alerts
  initLiveAggregatedAlerts();
});

// ==================================================
// 3. NAVIGATION TAB SYSTEM
// ==================================================
function initNavigation() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".view-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active from all tabs & panels
      tabButtons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      // Set active
      btn.classList.add("active");
      const targetTab = btn.getAttribute("data-tab");
      document.getElementById(`${targetTab}-view`).classList.add("active");
    });
  });

  // Default trigger
  document.getElementById("tab-dashboard-btn").click();
}

// ==================================================
// 4. LIGHT / DARK THEME ENGINE
// ==================================================
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle-btn");
  const html = document.documentElement;
  const sunIcon = themeToggle.querySelector(".sun");
  const moonIcon = themeToggle.querySelector(".moon");

  const savedTheme = localStorage.getItem("pune-pravah-theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("pune-pravah-theme", newTheme);
    updateThemeIcons(newTheme);
  });

  function updateThemeIcons(theme) {
    if (theme === "dark") {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  }
}

// ==================================================
// 5. PREPAREDNESS CHECKLIST SYSTEM
// ==================================================
function initChecklist() {
  const inputs = document.querySelectorAll(".checklist-input");
  const progressPercentVal = document.getElementById("progress-percent-val");
  const progressBarFill = document.getElementById("progress-bar-fill-indicator");
  const syncBtn = document.getElementById("sync-progress-btn");

  const guttersInput = document.getElementById("item-gutters");
  const guttersLabel = document.getElementById("item-gutters-label");

  function calculateProgress() {
    const total = inputs.length;
    const checked = document.querySelectorAll(".checklist-input:checked").length;
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
    
    progressPercentVal.textContent = `${percentage}%`;
    progressBarFill.style.width = `${percentage}%`;
  }

  inputs.forEach(input => {
    input.addEventListener("change", () => {
      calculateProgress();
      if (input === guttersInput) {
        if (guttersInput.checked) {
          guttersLabel.classList.add("border-red-bg");
        } else {
          guttersLabel.classList.remove("border-red-bg");
        }
      }
    });
  });

  syncBtn.addEventListener("click", () => {
    showSyncFailureModal();
  });

  calculateProgress();
}

function showSyncFailureModal() {
  const modal = document.getElementById("sync-failure-modal");
  modal.classList.add("active");

  const retryBtn = document.getElementById("modal-retry-btn");
  const offlineBtn = document.getElementById("modal-offline-btn");

  retryBtn.onclick = () => {
    modal.classList.remove("active");
    showLoader(() => {
      alert(currentLanguage === 'mr' ? "माहिती यशस्वीरीत्या सिंक झाली!" : currentLanguage === 'hi' ? "प्रगति सफलतापूर्वक सिंक हो गई!" : "Progress successfully synced!");
    });
  };

  offlineBtn.onclick = () => {
    modal.classList.remove("active");
  };
}

function showLoader(callback) {
  const loader = document.getElementById("flows-loader-modal");
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    if (callback) callback();
  }, 1500);
}

// ==================================================
// 6. TRAVEL VARIANTS & DYNAMIC ROUTING
// ==================================================
function initTravelVariants() {
  const btnAdvisory = document.getElementById("btn-variant-advisory");
  const btnFlows = document.getElementById("btn-variant-flows");
  const panelAdvisory = document.getElementById("variant-advisory-panel");
  const panelFlows = document.getElementById("variant-flows-panel");

  btnAdvisory.addEventListener("click", () => {
    btnAdvisory.classList.add("active");
    btnFlows.classList.remove("active");
    panelAdvisory.classList.add("active");
    panelFlows.classList.remove("active");
  });

  btnFlows.addEventListener("click", () => {
    btnFlows.classList.add("active");
    btnAdvisory.classList.remove("active");
    panelFlows.classList.add("active");
    panelAdvisory.classList.remove("active");
  });

  const originSelect = document.getElementById("route-origin");
  const destSelect = document.getElementById("route-destination");

  if (originSelect && destSelect) {
    originSelect.addEventListener("change", updateAdvisoryRoute);
    destSelect.addEventListener("change", updateAdvisoryRoute);
  }
}

const ADVISORY_MATRIX = {
  kothrud: {
    shivaji_nagar: {
      closedD: "M 120,400 L 250,300 L 320,200 L 320,100",
      safeD: "M 120,400 L 80,300 L 100,180 L 200,130 L 320,100",
      warningCoords: [250, 300],
      warningText: "Karve Rd Closed",
      delay: "+25 mins",
      desc: "Karve Road near Garware College is submerged. Avoid this route. Take SB Road → University Circle."
    },
    deccan: {
      closedD: "M 120,400 L 250,300 L 320,200",
      safeD: "M 120,400 L 80,300 L 100,180 L 320,200",
      warningCoords: [250, 300],
      warningText: "Karve Rd Closed",
      delay: "+20 mins",
      desc: "Karve Road near Garware College is submerged. Avoid this route. Divert via SB Road."
    },
    yerawada: {
      closedD: "M 120,400 L 250,300 L 320,200 L 420,80",
      safeD: "M 120,400 L 80,300 L 150,50 L 300,50 L 420,80",
      warningCoords: [320, 200],
      warningText: "Deccan Submerged",
      delay: "+15 mins",
      desc: "Severe water clogging at Deccan bridge. Safe route: SB Road → Aundh-Khadki Road."
    }
  },
  baner: {
    shivaji_nagar: {
      closedD: "M 100,150 L 300,190 L 320,100",
      safeD: "M 100,150 L 150,50 L 300,50 L 320,100",
      warningCoords: [300, 190],
      warningText: "University Circle Clogged",
      delay: "+20 mins",
      desc: "Waterlogging at University Circle underpass. Take Aundh-Khadki Road via Spicer College."
    },
    deccan: {
      closedD: "M 100,150 L 300,190 L 320,200",
      safeD: "M 100,150 L 80,300 L 240,240 L 320,200",
      warningCoords: [300, 190],
      warningText: "University Rd Congested",
      delay: "+15 mins",
      desc: "Severe metro construction debris and water clogging on University Road near Chowk. Take Pashan Road."
    },
    yerawada: {
      closedD: "M 100,150 L 300,190 L 420,80",
      safeD: "M 100,150 L 150,50 L 300,50 L 420,80",
      warningCoords: [300, 190],
      warningText: "University Rd Blocked",
      delay: "+25 mins",
      desc: "Waterlogging at University Circle underpass. Take Aundh-Khadki Road via Spicer College."
    }
  },
  hinjawadi: {
    shivaji_nagar: {
      closedD: "M 50,220 L 100,150 L 320,100",
      safeD: "M 50,220 L 80,120 L 150,50 L 300,50 L 320,100",
      warningCoords: [100, 150],
      warningText: "Aundh Bridge Flooded",
      delay: "+35 mins",
      desc: "Mula river water overflow near Aundh bridge. Safe route: Wakad Highway → Baner Road."
    },
    deccan: {
      closedD: "M 50,220 L 120,400 L 320,200",
      safeD: "M 50,220 L 80,120 L 150,50 L 320,200",
      warningCoords: [120, 400],
      warningText: "Wakad Clogged",
      delay: "+30 mins",
      desc: "Severe traffic backlog near Wakad flyover. Divert via Baner-Pashan Link Road."
    },
    yerawada: {
      closedD: "M 50,220 L 100,150 L 420,80",
      safeD: "M 50,220 L 80,120 L 150,50 L 300,50 L 420,80",
      warningCoords: [100, 150],
      warningText: "Khadki Waterlogged",
      delay: "+25 mins",
      desc: "Slow traffic near Khadki underpass due to heavy rains. Use Wakad Highway → Aundh bypass."
    }
  },
  sinhagad: {
    shivaji_nagar: {
      closedD: "M 160,420 L 240,300 L 320,100",
      safeD: "M 160,420 L 100,380 L 120,280 L 240,240 L 320,100",
      warningCoords: [240, 300],
      warningText: "Riverbed Closed",
      delay: "+40 mins",
      desc: "Sinhagad riverbed road is closed due to discharge from Khadakwasla dam. Take bypass highway."
    },
    deccan: {
      closedD: "M 160,420 L 240,300 L 320,200",
      safeD: "M 160,420 L 100,380 L 120,280 L 240,240 L 320,200",
      warningCoords: [240, 300],
      warningText: "Sinhagad Rd Flooded",
      delay: "+45 mins",
      desc: "Sinhagad Road underpass is completely submerged. Mutha river overflow active. Divert via Mumbai-Pune Bypass Highway."
    },
    yerawada: {
      closedD: "M 160,420 L 320,200 L 420,80",
      safeD: "M 160,420 L 100,380 L 350,420 L 550,300 L 420,80",
      warningCoords: [320, 200],
      warningText: "Swargate Traffic",
      delay: "+30 mins",
      desc: "Heavy metro work water clogging near Swargate. Use bypass highway → Hadapsar route."
    }
  }
};

function updateAdvisoryRoute() {
  const origin = document.getElementById("route-origin").value;
  const dest = document.getElementById("route-destination").value;

  const originData = ROUTE_DATA[origin];
  const destData = ROUTE_DATA[dest];

  if (!originData || !destData) return;

  const originMarker = document.getElementById("map-origin-marker");
  const destMarker = document.getElementById("map-dest-marker");
  const originLbl = document.getElementById("map-origin-lbl");
  const destLbl = document.getElementById("map-dest-lbl");

  if (originMarker) originMarker.setAttribute("transform", `translate(${originData.coords[0]}, ${originData.coords[1]})`);
  if (destMarker) destMarker.setAttribute("transform", `translate(${destData.coords[0]}, ${destData.coords[1]})`);
  if (originLbl) originLbl.textContent = `${originData.name} (Origin)`;
  if (destLbl) destLbl.textContent = `${destData.name} (Dest)`;

  const closedPath = document.querySelector(".path-closed");
  const safePath = document.querySelector(".path-safe");
  const warningMarker = document.getElementById("map-warning-marker");
  const alertCardGroup = document.getElementById("map-alert-card-group");
  const alertCardText = document.getElementById("map-alert-card-text");
  const alertsSidebar = document.querySelector(".alerts-sidebar-section");

  let closedD = "";
  let safeD = `M ${originData.coords[0]},${originData.coords[1]} L ${destData.coords[0]},${destData.coords[1]}`;
  let warningCoords = null;
  let warningText = "";
  let sidebarHTML = `<span class="section-label" data-localize="active_alerts_lbl">ACTIVE ALERTS ON ROUTE</span>`;

  const matrix = ADVISORY_MATRIX[origin] && ADVISORY_MATRIX[origin][dest];

  if (matrix) {
    closedD = matrix.closedD;
    safeD = matrix.safeD;
    warningCoords = matrix.warningCoords;
    warningText = matrix.warningText;
    sidebarHTML += `
      <div class="alert-item-box item-submerged">
        <div class="alert-box-header">
          <span class="bullet bullet-red"></span>
          <strong>${warningText}</strong>
        </div>
        <p class="alert-box-text">${matrix.desc}</p>
        <span class="delay-tag tag-red">Delay: ${matrix.delay}</span>
      </div>
      <div class="alert-item-box item-safe-route">
        <div class="alert-box-header">
          <svg class="icon-small text-blue" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          <strong>Recommended Safe Route</strong>
        </div>
        <p class="alert-box-text">Take the highlighted path on the map. Avoid key waterlogged intersections.</p>
      </div>
    `;
  } else {
    sidebarHTML += `
      <div class="alert-item-box item-safe-route" style="background-color: var(--accent-blue-light); border-color: var(--color-border);">
        <div class="alert-box-header">
          <svg class="icon-small text-blue" viewBox="0 0 24 24" fill="var(--accent-blue)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          <strong style="color: var(--accent-blue);">Route Clear</strong>
        </div>
        <p class="alert-box-text" style="color: var(--text-secondary);">No major waterlogging reports or road closures along this path.</p>
      </div>
    `;
  }

  if (closedPath) closedPath.setAttribute("d", closedD);
  if (safePath) safePath.setAttribute("d", safeD);

  if (warningCoords) {
    if (warningMarker) {
      warningMarker.style.display = "block";
      warningMarker.setAttribute("transform", `translate(${warningCoords[0]}, ${warningCoords[1]})`);
    }
    if (alertCardGroup) {
      alertCardGroup.style.display = "block";
      alertCardGroup.setAttribute("transform", `translate(${warningCoords[0]}, ${warningCoords[1] - 40})`);
    }
    if (alertCardText) alertCardText.textContent = warningText;
  } else {
    if (warningMarker) warningMarker.style.display = "none";
    if (alertCardGroup) alertCardGroup.style.display = "none";
  }

  if (alertsSidebar) alertsSidebar.innerHTML = sidebarHTML;
}

// ==================================================
// 7. SETTINGS & MULTILINGUAL & SQL SYNC SYSTEM
// ==================================================
function initSettings() {
  const langBtns = document.querySelectorAll(".lang-btn");
  const saveBtn = document.getElementById("settings-save-btn");
  const resetBtn = document.getElementById("settings-reset-btn");
  const addContactBtn = document.getElementById("db-add-contact-btn");

  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      langBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const selectedLang = btn.getAttribute("data-lang");
      currentLanguage = selectedLang;
      applyLanguage(selectedLang);
      
      // Update inline button labels if editing
      const editIdentityBtn = document.querySelector(".account-action-btn");
      if (editIdentityBtn) {
        if (editIdentityBtn.classList.contains("editing")) {
          editIdentityBtn.textContent = currentLanguage === 'mr' ? "ओळख जतन करा" : currentLanguage === 'hi' ? "पहचान सहेजें" : "Save Identity";
        } else {
          editIdentityBtn.textContent = currentLanguage === 'mr' ? "ओळख संपादित करा" : currentLanguage === 'hi' ? "पहचान संपादित करें" : "Edit Identity";
        }
      }
    });
  });

  saveBtn.addEventListener("click", () => {
    saveUserProfileToSQL(() => {
      alert(currentLanguage === 'mr' ? "प्राधान्ये जतन केली!" : currentLanguage === 'hi' ? "प्राथमिकताएं सहेज ली गईं!" : "Preferences Saved to SQL!");
    });
  });

  resetBtn.addEventListener("click", () => {
    langBtns.forEach(b => b.classList.remove("active"));
    document.querySelector('.lang-btn[data-lang="en"]').classList.add("active");
    currentLanguage = 'en';
    applyLanguage('en');
    
    document.getElementById("pref-push-notif").checked = true;
    document.getElementById("pref-sms-notif").checked = false;
    
    saveUserProfileToSQL();
  });

  // Connected Account Edit Identity logic
  const editIdentityBtn = document.querySelector(".account-action-btn");
  const accountNameEl = document.querySelector(".account-name");
  const accountPhoneEl = document.querySelector(".account-phone");
  let isEditing = false;

  if (editIdentityBtn && accountNameEl && accountPhoneEl) {
    editIdentityBtn.addEventListener("click", () => {
      if (!isEditing) {
        isEditing = true;
        editIdentityBtn.classList.add("editing");
        
        const currentName = accountNameEl.textContent;
        const currentPhone = accountPhoneEl.textContent;

        accountNameEl.innerHTML = `<input type="text" class="edit-field edit-name" value="${currentName}" style="width: 100%; padding: 4px 8px; font-size: 16px; border: 1px solid var(--color-border); border-radius: 4px; background: var(--bg-secondary); color: var(--text-primary); outline: none;">`;
        accountPhoneEl.innerHTML = `<input type="text" class="edit-field edit-phone" value="${currentPhone}" style="width: 100%; padding: 4px 8px; font-size: 12px; border: 1px solid var(--color-border); border-radius: 4px; background: var(--bg-secondary); color: var(--text-primary); outline: none; margin-top: 4px;">`;
        
        editIdentityBtn.textContent = currentLanguage === 'mr' ? "ओळख जतन करा" : currentLanguage === 'hi' ? "पहचान सहेजें" : "Save Identity";
        editIdentityBtn.style.backgroundColor = "var(--color-green)";
        editIdentityBtn.style.color = "#ffffff";
      } else {
        isEditing = false;
        editIdentityBtn.classList.remove("editing");
        
        const newNameInput = accountNameEl.querySelector(".edit-name");
        const newPhoneInput = accountPhoneEl.querySelector(".edit-phone");
        
        const newName = newNameInput ? newNameInput.value.trim() : "Pune Resident";
        const newPhone = newPhoneInput ? newPhoneInput.value.trim() : "+91 •••• •• 4521";

        accountNameEl.textContent = newName;
        accountPhoneEl.textContent = newPhone;
        accountNameEl.removeAttribute("data-localize");

        editIdentityBtn.textContent = currentLanguage === 'mr' ? "ओळख संपादित करा" : currentLanguage === 'hi' ? "पहचान संपादित करें" : "Edit Identity";
        editIdentityBtn.style.backgroundColor = "";
        editIdentityBtn.style.color = "";
        
        // Post update to SQLite database!
        saveUserProfileToSQL(() => {
          alert(currentLanguage === 'mr' ? "ओळख यशस्वीरीत्या अपडेट झाली!" : currentLanguage === 'hi' ? "पहचान सफलतापूर्वक अपडेट हो गई!" : "Identity updated in SQL database!");
        });
      }
    });
  }

  // SQL SOS Contact addition logic
  if (addContactBtn) {
    addContactBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("new-contact-name");
      const phoneInput = document.getElementById("new-contact-phone");
      
      const name = nameInput ? nameInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      
      if (!name || !phone) {
        alert(currentLanguage === 'mr' ? "कृपया नाव आणि फोन नंबर टाका." : currentLanguage === 'hi' ? "कृपया नाम और फोन नंबर दर्ज करें।" : "Please enter both name and phone number.");
        return;
      }
      
      postCustomSOSContact(name, phone, () => {
        nameInput.value = "";
        phoneInput.value = "";
        fetchSQLContacts(); // Reload contacts list
        alert(currentLanguage === 'mr' ? "आपत्कालीन संपर्क जोडला!" : currentLanguage === 'hi' ? "आपातकालीन संपर्क जोड़ा गया!" : "Emergency contact added to SQL database!");
      });
    });
  }
}

// ==================================================
// 8. SQL DATA SYNC API CLIENT CALLS
// ==================================================
function fetchUserProfile() {
  fetch("/api/user")
    .then(res => {
      if (!res.ok) throw new Error("Server error");
      return res.json();
    })
    .then(data => {
      // Set name & phone numbers
      const accountNameEl = document.querySelector(".account-name");
      const accountPhoneEl = document.querySelector(".account-phone");
      if (accountNameEl) {
        accountNameEl.textContent = data.name;
        accountNameEl.removeAttribute("data-localize");
      }
      if (accountPhoneEl) accountPhoneEl.textContent = data.phone;
      
      // Set language button selection
      if (data.preferred_language) {
        currentLanguage = data.preferred_language;
        const targetBtn = document.querySelector(`.lang-btn[data-lang="${currentLanguage}"]`);
        if (targetBtn) {
          document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
          targetBtn.classList.add("active");
          applyLanguage(currentLanguage);
        }
      }
      
      // Set notification checkboxes
      document.getElementById("pref-push-notif").checked = data.push_notifications;
      document.getElementById("pref-sms-notif").checked = data.sms_notifications;
    })
    .catch(err => {
      console.warn("Failed to fetch SQL profile data. Operating in offline cached mode.", err);
    });
}

function saveUserProfileToSQL(callback) {
  const accountNameEl = document.querySelector(".account-name");
  const accountPhoneEl = document.querySelector(".account-phone");
  
  // Parse name if currently input element
  let name = "Pune Resident";
  if (accountNameEl) {
    const input = accountNameEl.querySelector("input");
    name = input ? input.value : accountNameEl.textContent;
  }
  
  let phone = "+91 98765 43210";
  if (accountPhoneEl) {
    const input = accountPhoneEl.querySelector("input");
    phone = input ? input.value : accountPhoneEl.textContent;
  }
  
  const pushNotifications = document.getElementById("pref-push-notif").checked;
  const smsNotifications = document.getElementById("pref-sms-notif").checked;
  
  const payload = {
    name: name,
    phone: phone,
    preferred_language: currentLanguage,
    push_notifications: pushNotifications,
    sms_notifications: smsNotifications
  };

  fetch("/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => {
    if (!res.ok) throw new Error("Server error saving settings");
    return res.json();
  })
  .then(data => {
    if (callback) callback();
  })
  .catch(err => {
    console.error("SQL Save Failed:", err);
  });
}

function fetchSQLContacts() {
  const container = document.getElementById("db-contacts-list");
  if (!container) return;

  fetch("/api/contacts")
    .then(res => {
      if (!res.ok) throw new Error("Server contacts error");
      return res.json();
    })
    .then(list => {
      container.innerHTML = "";
      list.forEach(c => {
        const item = document.createElement("div");
        item.style.padding = "6px 10px";
        item.style.backgroundColor = "var(--bg-tertiary)";
        item.style.borderRadius = "4px";
        item.style.fontSize = "11px";
        item.style.border = "1px solid var(--color-border)";
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        
        const officialBadge = c.is_official 
          ? `<span style="font-size: 8px; font-weight: 700; color: var(--accent-blue); background-color: var(--accent-blue-light); padding: 1px 4px; border-radius: 2px; margin-left: 6px;">OFFICIAL</span>`
          : `<span style="font-size: 8px; font-weight: 700; color: #718096; background-color: #edf2f7; padding: 1px 4px; border-radius: 2px; margin-left: 6px;">CUSTOM</span>`;

        item.innerHTML = `
          <div>
            <strong>${c.name}</strong> ${officialBadge}
            <div style="color: var(--text-secondary); margin-top: 1px;">${c.number} (${c.region})</div>
          </div>
        `;
        container.appendChild(item);
      });
    })
    .catch(err => {
      console.warn("Failed to load SQL contacts list. Using offline fallbacks.", err);
      // Render offline placeholder fallback list
      container.innerHTML = `
        <div style="font-size: 10px; color: var(--text-muted); text-align: center; padding: 10px 0;">
          Offline contacts cache active
        </div>
      `;
    });
}

function postCustomSOSContact(name, phone, callback) {
  const payload = {
    name: name,
    number: phone,
    region: "User Custom"
  };

  fetch("/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => {
    if (!res.ok) throw new Error("Server error adding contact");
    return res.json();
  })
  .then(data => {
    if (callback) callback();
  })
  .catch(err => {
    console.error("SQL Add Contact Failed:", err);
  });
}

function applyLanguage(lang) {
  const dictionary = LOCALIZATION[lang] || LOCALIZATION['en'];
  const elements = document.querySelectorAll("[data-localize]");
  elements.forEach(el => {
    const key = el.getAttribute("data-localize");
    if (dictionary[key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', dictionary[key]);
      } else {
        el.textContent = dictionary[key];
      }
    }
  });
}

// ==================================================
// 9. DEBUG SIDEBAR CONTROLS
// ==================================================
function initDebugControls() {
  const showLoaderBtn = document.getElementById("dbg-show-loader");
  const showErrorBtn = document.getElementById("dbg-show-error");
  const showMapBtn = document.getElementById("dbg-show-map");

  showLoaderBtn.addEventListener("click", () => {
    showLoader();
  });

  showErrorBtn.addEventListener("click", () => {
    showSyncFailureModal();
  });

  showMapBtn.addEventListener("click", () => {
    alert("Maps re-centered and layers updated successfully!");
  });
}

function initNearMeButton() {
  const nearMeBtn = document.getElementById("flows-nearme-btn");
  if (nearMeBtn) {
    nearMeBtn.addEventListener("click", () => {
      if (navigator.geolocation) {
        showLoader(() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              
              let closestLocal = "Deccan Gymkhana";
              let minDistance = 999.0;
              
              const localCoords = {
                "Kothrud": [18.5074, 73.8077],
                "Baner / Aundh": [18.5500, 73.8000],
                "Hinjawadi": [18.5913, 73.7389],
                "Sinhagad Road": [18.4770, 73.8224],
                "Shivaji Nagar": [18.5300, 73.8500],
                "Deccan Gymkhana": [18.5196, 73.8553],
                "Yerawada": [18.5500, 73.8800]
              };
              
              for (const [name, coords] of Object.entries(localCoords)) {
                const dist = Math.sqrt(Math.pow(lat - coords[0], 2) + Math.pow(lon - coords[1], 2));
                if (dist < minDistance) {
                  minDistance = dist;
                  closestLocal = name;
                }
              }
              
              alert(`Geolocation Successful!\n\nClosest Resolved Location: ${closestLocal}\nCoordinates: ${lat.toFixed(4)}, ${lon.toFixed(4)}\n\nCentering map view layers around ${closestLocal}...`);
            },
            (error) => {
              console.warn("Geolocation Error:", error);
              alert("Geolocation Failed: Permission Denied or GPS signal unavailable.\n\nFalling back to default center: Deccan Gymkhana (18.5196, 73.8553).");
            }
          );
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  }
}

// ==================================================
// 10. DASHBOARD SOS MODAL & MAP LAYERS CONTROLS
// ==================================================
function initDashboardSOS() {
  const sosBanner = document.getElementById("sos-banner-btn");
  const sosModal = document.getElementById("sos-modal");
  const closeBtn = document.getElementById("modal-sos-close-btn");
  const modalContactsList = document.getElementById("modal-sos-contacts-list");

  if (sosBanner && sosModal && closeBtn) {
    sosBanner.addEventListener("click", () => {
      sosModal.style.display = "flex";
      
      // Load contacts into modal dynamically from main settings contacts list
      if (modalContactsList) {
        const mainList = document.getElementById("db-contacts-list");
        if (mainList) {
          modalContactsList.innerHTML = mainList.innerHTML;
          // If empty, show fallback text
          if (!modalContactsList.innerHTML.trim()) {
            modalContactsList.innerHTML = `
              <div style="font-size: 11px; color: var(--text-muted); text-align: center; padding: 10px 0;">
                No emergency contacts saved. Go to Settings tab to manage numbers.
              </div>
            `;
          }
        }
      }
    });

    closeBtn.addEventListener("click", () => {
      sosModal.style.display = "none";
    });
  }
}

function initMapLayers() {
  const riskWaterBtn = document.getElementById("risk-water-btn");
  const riskTrafficBtn = document.getElementById("risk-traffic-btn");
  const sinhagadRiskZone = document.getElementById("sinhagad-risk-zone");
  const rivers = document.querySelectorAll(".map-river");
  const roads = document.querySelectorAll(".pune-map-svg .road-path");

  if (riskWaterBtn && riskTrafficBtn) {
    riskWaterBtn.addEventListener("click", () => {
      riskWaterBtn.classList.add("active");
      riskTrafficBtn.classList.remove("active");
      
      // Show rivers and water flood zone
      if (sinhagadRiskZone) sinhagadRiskZone.style.display = "block";
      rivers.forEach(r => {
        r.style.opacity = "0.6";
        r.style.stroke = "#5fa6e6";
      });
      
      // Dim roads
      roads.forEach(road => {
        road.style.opacity = "0.3";
      });
    });

    riskTrafficBtn.addEventListener("click", () => {
      riskTrafficBtn.classList.add("active");
      riskWaterBtn.classList.remove("active");
      
      // Hide rivers and water flood zone
      if (sinhagadRiskZone) sinhagadRiskZone.style.display = "none";
      rivers.forEach(r => {
        r.style.opacity = "0.15";
        r.style.stroke = "#a0aec0"; // Gray out the rivers
      });
      
      // Highlight roads with traffic congestion intensity colors
      roads.forEach(road => {
        road.style.opacity = "1.0";
        if (road.classList.contains("road-danger")) {
          road.style.stroke = "#e53e3e"; // Red alert delay
          road.style.strokeWidth = "8";
        } else if (road.classList.contains("road-warning")) {
          road.style.stroke = "#dd6b20"; // Orange warning delay
          road.style.strokeWidth = "6";
        } else {
          road.style.stroke = "#48bb78"; // Green safe flow
          road.style.strokeWidth = "4";
        }
      });
    });
  }
}

function initLiveAggregatedAlerts() {
  const alertCard = document.getElementById("dashboard-alert-card");
  const alertTitle = document.getElementById("dashboard-alert-title");
  const alertBadge = document.getElementById("dashboard-alert-badge");
  const alertDesc = document.getElementById("dashboard-alert-desc");
  
  const intensityVal = document.getElementById("dashboard-intensity-val");
  const damVal = document.getElementById("dashboard-dam-val");
  const damSub = document.getElementById("dashboard-dam-sub");

  fetch("/api/unified-alert")
    .then(res => {
      if (!res.ok) throw new Error("Unified alert API unreachable");
      return res.json();
    })
    .then(data => {
      const weather = data.weather;
      if (intensityVal) intensityVal.textContent = weather.precipitation_rate_mm_hr.toFixed(1);
      
      const level = weather.alert_level;
      
      // Update Alert Card visually
      if (alertCard) {
        // Reset classes
        alertCard.className = "alert-card";
        
        if (level === "RED") {
          alertCard.classList.add("border-red");
          if (alertTitle) alertTitle.textContent = "RED ALERT: Extreme Rainfall";
          if (alertBadge) {
            alertBadge.textContent = "ACTIVE";
            alertBadge.className = "badge badge-red";
          }
        } else if (level === "ORANGE") {
          alertCard.classList.add("border-orange");
          if (alertTitle) alertTitle.textContent = "ORANGE ALERT: Heavy Rainfall";
          if (alertBadge) {
            alertBadge.textContent = "ACTIVE";
            alertBadge.className = "badge";
            alertBadge.style.backgroundColor = "#dd6b20";
            alertBadge.style.color = "#ffffff";
          }
        } else if (level === "YELLOW") {
          alertCard.classList.add("border-orange");
          if (alertTitle) alertTitle.textContent = "YELLOW ALERT: Moderate Rains";
          if (alertBadge) {
            alertBadge.textContent = "ACTIVE";
            alertBadge.className = "badge";
            alertBadge.style.backgroundColor = "#ecc94b";
            alertBadge.style.color = "#ffffff";
          }
        } else {
          alertCard.style.borderLeft = "6px solid var(--color-border)";
          if (alertTitle) alertTitle.textContent = "No Active Severe Alerts";
          if (alertBadge) {
            alertBadge.textContent = "NORMAL";
            alertBadge.className = "badge";
            alertBadge.style.backgroundColor = "#cbd5e0";
            alertBadge.style.color = "#2d3748";
          }
        }
        if (alertDesc) {
          alertDesc.textContent = weather.nowcast_summary || "No severe meteorological events detected in Pune municipal regions.";
        }
      }

      // Update Dam Releases
      const telemetry = data.municipal_telemetry;
      if (telemetry && Array.isArray(telemetry.dam_storage) && telemetry.dam_storage.length > 0) {
        const primaryDam = telemetry.dam_storage[0];
        if (damVal) damVal.textContent = primaryDam.discharge_cusecs.toLocaleString();
        if (damSub) {
          damSub.textContent = `● ${primaryDam.dam_name} at ${primaryDam.storage_percentage}% capacity. Status: ${primaryDam.status}`;
          if (primaryDam.discharge_cusecs > 10000) {
            damSub.style.color = "#e53e3e";
          } else {
            damSub.style.color = "#48bb78";
          }
        }
      } else {
        if (damVal) damVal.textContent = "--";
        if (damSub) {
          damSub.textContent = "● Dam Level Telemetry: Data Unavailable (PMC offline)";
          damSub.style.color = "#e53e3e";
        }
      }
    })
    .catch(err => {
      console.warn("Failed to fetch live aggregated alerts:", err);
      if (damVal) damVal.textContent = "--";
      if (damSub) {
        damSub.textContent = "● PMC Data stream unreachable";
        damSub.style.color = "#e53e3e";
      }
    });
}
