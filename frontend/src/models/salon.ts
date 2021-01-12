export class Salon {
    id: number;
    fullname: string;
    username: string;
    password: string;
    email: string;
	phone: string;
    address: string;
	selected: any;
	fb_link: any;
    ig_link: any;
    active: number;
    opening_hour: string;
    closing_hour: string;

    clear(): void {
        this.id = undefined;
        this.username = '';
        this.password = '';
        this.email = '';
        this.fullname = '';
        this.phone = '';
        this.fb_link = '';
        this.ig_link = '';
        this.active = undefined;
        this.address = '';
        this.opening_hour = '';
        this.closing_hour = '';
    }
}