import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "../../assets/Task.scss";
import { taskList } from "../../database/TaskDatabase";
export default function Task() {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Mark as done" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-outlined p-button-secondary"
      />
    </div>
  );

  return (
    <div className="card flex row-gap-8 justify-content-evenly flex-row column-gap-8 task-container flex-wrap">
      {taskList.map((item) => {
        return (
          <Card
            title={item.title}
            subTitle={item.type}
            footer={footer}
            header={header}
            className="md:w-25rem"
            key={item.id}
          >
            <p className="m-0">{item.desc}</p>
          </Card>
        );
      })}
    </div>
  );
}
