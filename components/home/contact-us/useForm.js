import {
  required,
  email,
  minLength,
  alpha,
  numeric,
} from "@vuelidate/validators";

import BaseInput from "@/components/base/BaseInput.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";

export function useForm() {
  const formData = reactive({
    name: "",
    phone: "",
    email: "",
    time: "",
    request: "",
  });

  const formFields = ref([
    {
      id: "name",
      name: "name",
      placeholder: "contac_us_section.form.inputs.name",
    },
    {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "contac_us_section.form.inputs.phone",
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "contac_us_section.form.inputs.email",
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

  const rules = {
    name: { required, alpha, minLength: minLength(3) },
    phone: { required, numeric, minLength: minLength(5) },
    email: { required, email },
    time: { required },
    request: { required },
  };

  const fieldComponent = markRaw({
    name: BaseInput,
    phone: BaseInput,
    email: BaseInput,
    time: BaseSelect,
    request: BaseSelect,
  });

  return { formData, formFields, rules, fieldComponent };
}
