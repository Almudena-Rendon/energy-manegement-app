import { useState } from "react"
import Datepicker from "tailwind-datepicker-react"
import moment from 'moment';

const options = {
	title: false,
	autoHide: true,
	todayBtn: true,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1990-01-01"),
	theme: {
		background: "bg-white dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-gray-50",
		input: "rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none ",
		inputIcon: "",
		selected: "text-gray-800",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-12 ",
	defaultDate: new Date("2022-01-01"),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

const Calendar = ({ request, setRequest, dateType }) => {
	const [show, setShow] = useState(false)

	const handleChange = (selectedDate) => {
    let formattedDate

		console.log(selectedDate)
    if (dateType === "startDate") {
      formattedDate = moment(selectedDate).startOf("day").format("YYYY-MM-DD[T]HH:mm")
      setRequest({ ...request, startDate: formattedDate })
    } else if (dateType === "endDate") {
      formattedDate = moment(selectedDate).endOf("day").format("YYYY-MM-DD[T]HH:mm")
      setRequest({ ...request, endDate: formattedDate })
    }
	}

  const handleClose = (state) => {
    setShow(state)
  }

	return (
		<div>
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}

export default Calendar
