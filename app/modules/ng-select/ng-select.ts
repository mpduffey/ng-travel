import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector:			'ng-select',
	template:			`
		<select [ngModel]="bindModelData" (ngModelChange)="updateData($event)">
			<option *ngFor="let option of options" [ngValue]="option.value">{{option.label}}</option>
		</select>
	`
})

export class NgSelectCtrl implements ControlValueAccessor {
	@Input() options;
	@Input() bindModelData;
	@Output() bindModelDataChange = new EventEmitter();

	updateData = (event) => {
		this.bindModelData = event;
		this.bindModelDataChange.emit(event);
	}
}