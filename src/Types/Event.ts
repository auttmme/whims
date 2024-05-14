export interface EventProps {
	createdAt: string;
	eventName: string;
	eventBannerImageUrl: string;
	eventStreetAddress: string;
	eventCity: string;
	eventCountry: string;
	evenLocationLabel: string;
	eventLongitude: number;
	eventLatitude: number;
	ticketsRemaining: number;
	totalSpeakers: number;
	eventDate: string;
	eventPackage: Array<number | string>;
	eventDescription: string;
	id: number;
}

export interface EventCardProps {
	id: number;
	eventName: string;
	eventBannerImageUrl: string;
	eventCity: string;
	eventCountry: string;
	eventDate: string;
	eventDescription: string;
}
