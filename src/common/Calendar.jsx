import { useState } from "react";
import moment from 'moment';
import Datepicker from "tailwind-datepicker-react";
import { ArrowLeft, ArrowRight } from "../utils/Index";

const Calendar = ({ request, setRequest, dateType }) => {

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
			disabledText: "bg-gray-50 dark:bg-gray-700",
			input: "rounded-lg bg-gray-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none ",
			inputIcon: "",
			selected: "",
		},
		icons: {
			prev: () => <span><ArrowLeft /></span>,
			next: () => <span><ArrowRight /></span>,
		},
		datepickerClassNames: "absolute mb-2 top-[-24.8rem] lg:top-9",
		defaultDate: dateType === "startDate" ? new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate())  : new Date(),
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
	};
	
	const [show, setShow] = useState(false);

	const handleChange = (selectedDate) => {
		let formattedDate

		if (dateType === "startDate") {
			formattedDate = moment(selectedDate).startOf("day").format("YYYY-MM-DD[T]HH:mm");
			setRequest({ ...request, startDate: formattedDate });
		} else if (dateType === "endDate") {
			formattedDate = moment(selectedDate).endOf("day").format("YYYY-MM-DD[T]HH:mm");
			setRequest({ ...request, endDate: formattedDate });
		}
	};

	const handleClose = (state) => {
		setShow(state);
	};

	return (
		<div className="relative lg:static">
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	);
}

export default Calendar;
