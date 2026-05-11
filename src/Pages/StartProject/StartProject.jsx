import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PhoneInputPkg from "react-phone-input-2";
const PhoneInput = PhoneInputPkg.default || PhoneInputPkg;
import "react-phone-input-2/lib/style.css";
import { Fade } from "react-awesome-reveal";
import styles from "./StartProject.module.css";
import SEOManager from "../../Components/SEOManager/SEOManager";
import { useGetSettingsQuery } from "../../redux/api/settingsApi";
import { useGetBranchesQuery, useRegisterProjectMutation } from "../../redux/api/projectApi";

const StartProject = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === "ar" ? "ar" : "en";
  
  const { data: settingsResponse } = useGetSettingsQuery(i18n.language);
  const settings = settingsResponse?.data;
  const logo = settings?.logo || "/assets/3.png";

  const { data: branchesResponse, isLoading: branchesLoading } = useGetBranchesQuery(i18n.language);
  const [registerProject, { isLoading: isSubmitting }] = useRegisterProjectMutation();

  const branches = branchesResponse?.data?.branches || [];

  const [formData, setFormData] = useState({
    branch_id: "",
    name: "",
    phone: "",
    email: "",
    whatsapp_id: "",
    national_id: "",
    type: "individual",
    address: "",
    notes: "New project request from website",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Set default branch if available
  useEffect(() => {
    if (branches.length > 0 && !formData.branch_id) {
      setFormData(prev => ({ ...prev, branch_id: branches[0].id.toString() }));
    }
  }, [branches]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleWhatsappChange = (value) => {
    setFormData((prev) => ({ ...prev, whatsapp_id: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      await registerProject(formData).unwrap();
      setSubmitted(true);
    } catch (err) {
      console.error("Registration error:", err);
      setError(err?.data?.message || t("contactPage.form.error"));
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <SEOManager 
        title={t("startProjectPage.title")} 
        description={t("startProjectPage.subtitle")} 
      />
      
      <div className="container">
        <div className={styles.contentContainer}>
          <Fade direction="up" triggerOnce>
            <div className={styles.header}>
              <h1 className={styles.title}>{t("startProjectPage.title")}</h1>
              <p className={styles.subtitle}>{t("startProjectPage.subtitle")}</p>
            </div>
          </Fade>

          {submitted ? (
            <Fade direction="up" triggerOnce>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <i className="bi bi-check2-circle"></i>
                </div>
                <h3>{t("startProjectPage.form.successTitle")}</h3>
                <p>{t("startProjectPage.form.successMessage")}</p>
                <button 
                  className={styles.resetBtn} 
                  onClick={() => setSubmitted(false)}
                >
                  {t("contactPage.form.sendAnother")}
                </button>
              </div>
            </Fade>
          ) : (
            <Fade direction="up" delay={200} triggerOnce>
              <div className={styles.formWrapper}>
                <div className={styles.formLogo}>
                  <img src={logo} alt="Form Logo" />
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                  {error && (
                    <div className="alert alert-danger mb-4">
                      {error}
                    </div>
                  )}
                  
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="branch_id">{t("startProjectPage.form.branch")}</label>
                      <select
                        id="branch_id"
                        name="branch_id"
                        value={formData.branch_id}
                        onChange={handleChange}
                        className={styles.select}
                        required
                        disabled={branchesLoading}
                      >
                        <option value="">{t("contactPage.form.selectSubject")}</option>
                        {branches.map((branch) => (
                          <option key={branch.id} value={branch.id}>
                            {branch.name[currentLang] || branch.name["ar"]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="name">{t("startProjectPage.form.name")}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("startProjectPage.form.name")}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">{t("startProjectPage.form.email")}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("startProjectPage.form.email")}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">{t("startProjectPage.form.phone")}</label>
                      <div className={styles.phoneInputWrapper} dir="ltr">
                        <PhoneInput
                          country={"sa"}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          inputClass={styles.phoneInput}
                          buttonClass={styles.phoneButton}
                          placeholder={t("startProjectPage.form.phone")}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="whatsapp_id">{t("startProjectPage.form.whatsapp")}</label>
                      <div className={styles.phoneInputWrapper} dir="ltr">
                        <PhoneInput
                          country={"sa"}
                          value={formData.whatsapp_id}
                          onChange={handleWhatsappChange}
                          inputClass={styles.phoneInput}
                          buttonClass={styles.phoneButton}
                          placeholder={t("startProjectPage.form.whatsapp")}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="national_id">{t("startProjectPage.form.idNumber")}</label>
                      <input
                        type="text"
                        id="national_id"
                        name="national_id"
                        value={formData.national_id}
                        onChange={handleChange}
                        placeholder={t("startProjectPage.form.idNumber")}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>{t("startProjectPage.form.clientType")}</label>
                      <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                          <input
                            type="radio"
                            name="type"
                            value="individual"
                            checked={formData.type === "individual"}
                            onChange={handleChange}
                          />
                          <span>{t("startProjectPage.form.individual")}</span>
                        </label>
                        <label className={styles.radioLabel}>
                          <input
                            type="radio"
                            name="type"
                            value="company"
                            checked={formData.type === "company"}
                            onChange={handleChange}
                          />
                          <span>{t("startProjectPage.form.corporate")}</span>
                        </label>
                      </div>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label htmlFor="address">{t("startProjectPage.form.address")}</label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder={t("startProjectPage.form.address")}
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className={styles.formFooter}>
                    <button 
                      type="submit" 
                      className={styles.submitBtn}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t("contactPage.form.sending") : t("startProjectPage.form.submit")}
                    </button>
                  </div>
                </form>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartProject;
