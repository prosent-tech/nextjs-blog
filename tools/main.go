package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type Contents struct {
	Contents []Content `json:"contents"`
}

type Image struct {
	Url string `json:"url"`
}

type Content struct {
	Id          string `json:"id"`
	Title       string `json:"title"`
	Image       Image  `json:"image"`
	PublishedAt string `json:"publishedAt"`
}

const (
	url = "https://ymktmk.microcms.io/api/v1/news?limit=3"
)

func main() {
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal(err)
	}
	resBody, err := callApi(req)
	if err != nil {
		log.Fatal(err)
	}
	var contents Contents
	err = json.Unmarshal(resBody, &contents)
	if err != nil {
		log.Fatal(err)
	}
	file, _ := json.MarshalIndent(contents, "", " ")
	_ = ioutil.WriteFile("../contents.json", file, 0644)
}

func callApi(req *http.Request) ([]byte, error) {
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-MICROCMS-API-KEY", "pGzNWa7JyJ9nTMdXwazsxD3syPyzkS0RjeBF")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	resBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("status code is %d", resp.StatusCode)
	}
	return resBody, nil
}
