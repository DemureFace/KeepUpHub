import { required, email, minLength, helpers } from "@vuelidate/validators";

import BaseInput from "@/components/base/BaseInput.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";
import BaseTextarea from "@/components/base/BaseTextarea.vue";

export function useForm() {
  const formData = reactive({
    name: "",
    phone: "",
    email: "",
    comment: "",
    time: "",
    request: "",
  });

  const formFields = ref([
    {
      id: "name",
      name: "name",
      placeholder: "contac_us_section.form.inputs.name",
      isRequired: true,
    },
    {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "contac_us_section.form.inputs.phone",
      isRequired: true,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "contac_us_section.form.inputs.email",
    },
    {
      id: "comment",
      name: "comment",
      placeholder: "contac_us_section.form.textarea",
    },
    {
      id: "time",
      name: "time",
      size: "sm",
      placeholder: "contac_us_section.form.select.time.placeholder",
      options: [
        {
          label: "contac_us_section.form.select.time.options.first",
          value: "now",
        },
        {
          label: "contac_us_section.form.select.time.options.second",
          value: "12:00-13:00",
        },
        {
          label: "contac_us_section.form.select.time.options.third",
          value: "13:00-14:00",
        },
        {
          label: "contac_us_section.form.select.time.options.fourth",
          value: "14:00-15:00",
        },
        {
          label: "contac_us_section.form.select.time.options.fifth",
          value: "15:00-16:00",
        },
        {
          label: "contac_us_section.form.select.time.options.sixth",
          value: "16:00-17:00",
        },
      ],
      shouldTranslate: true,
    },
    {
      id: "request",
      name: "request",
      size: "sm",
      placeholder: "contac_us_section.form.select.request.placeholder",
      options: [
        {
          label: "contac_us_section.form.select.request.options.first",
          value: "activity",
        },
        {
          label: "contac_us_section.form.select.request.options.second",
          value: "remarketing",
        },
        {
          label: "contac_us_section.form.select.request.options.third",
          value: "feedback",
        },
        {
          label: "contac_us_section.form.select.request.options.fourth",
          value: "turnkey",
        },
      ],
      shouldTranslate: true,
      class: "z-0",
    },
  ]);

  const isValidPhone = (value) => {
    if (value === "") return true;

    const pattern = /^\+?\d{5,}$/;

    return pattern.test(value);
  };

  const rules = {
    name: { required, minLength: minLength(3) },
    phone: {
      required,
      isValidPhone: helpers.withMessage(
        "Value is not a valid phone number.",
        isValidPhone,
      ),
      minLength: minLength(5),
    },
    email: { required, email },
    comment: {},
    time: {},
    request: {},
  };

  const fieldComponent = markRaw({
    name: BaseInput,
    phone: BaseInput,
    email: BaseInput,
    comment: BaseTextarea,
    time: BaseSelect,
    request: BaseSelect,
  });

  function generateText() {
    return Object.entries(formData).reduce((acc, [key, value]) => {
      if (value) {
        return `${acc}\n*${key}*: ${value}`;
      }
      return acc;
    }, "");
  }

  function clearForm() {
    for (const key in formData) {
      formData[key] = "";
    }
  }

  return {
    formData,
    formFields,
    rules,
    fieldComponent,
    generateText,
    clearForm,
  };
}
